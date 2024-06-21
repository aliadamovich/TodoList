import { useState } from "react"
import { Button } from "./Button"
import { TaskElement } from "./TaskElement"

export type TodoListProps = {
	tasks: Task[]
}

export type Task = {
	id: number
	title: string
	isDone: boolean
}

export const TodoList = ({ tasks }: TodoListProps) => {

	//useState
	const [filter, setFilter] = useState('All');
	const [activeTasks, setActiveTasks] = useState(tasks);
	const [taskValue, setTaskValue] = useState<string | null>(null);
	
	//удаление таски
	const onRemoveTask = (id: number) => {
		const unDeleted = activeTasks.filter(t => t.id !== id)
		setActiveTasks(unDeleted)
	}
	//фильтрация таски
	let filteredTasks = activeTasks;

	if (filter === 'Completed') {
		filteredTasks = activeTasks.filter(t => t.isDone === true)
	}
	if (filter === 'Active') {
		filteredTasks = activeTasks.filter(t => t.isDone === false)
	}

	const setFiltersOnClick = (filter: string) => {
		setFilter(filter)
	}

	// изменения в инпуте
	const onChangeHandler = (value: string) => {
		setTaskValue(value.trim())
	}
	//добавление новой таски
	const onAddTask = () => {
		if (taskValue !== null && taskValue !== '') {
			let newTask = {
				id: 10,
				title: taskValue,
				isDone: false
			}
			const addedTasks = [...activeTasks, newTask]
			setActiveTasks(addedTasks)
			setTaskValue(null)
		}
	}

	const mappedTasks =
		!filteredTasks.length ? <div>No tasks</div>
		: filteredTasks.map(t => <TaskElement {...t} key={t.id} onChangeHandler={() => {}} onRemoveTask={onRemoveTask} />)

	return(
		<div>
			<h3></h3>
			<div>
				<input onChange={(e) => { onChangeHandler(e.target.value)}}/>
				<Button title="+" callBack={onAddTask}/>
			</div>
			<ul>
				{ mappedTasks }
			</ul>
			<div>
				<Button title="All" callBack={()=>setFiltersOnClick('All')} />
				<Button title="Active" callBack={()=>setFiltersOnClick('Active')} />
				<Button title="Completed" callBack={()=>setFiltersOnClick('Completed')} />
			</div>
		</div>
	)
}
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
	let filteredTasks = tasks;

	const mappedTasks =
		!filteredTasks.length ? <div>Empty</div>
		: filteredTasks.map(t => <TaskElement {...t} key={t.id} onChangeHandler={() => {}} onRemoveTask={onRemoveTask} />)

	const [filter, setFilter] = useState('All');
	

	if (filter === 'Completed') {
		filteredTasks = tasks.filter(t => t.isDone === true)
	}
	if (filter === 'Active') {
		filteredTasks = tasks.filter(t => t.isDone === false)
	}

	const setFiltersOnClick = (filter: string) => {
		setFilter(filter)
	}

	////
	
	const [activeTasks, setActiveTasks] = useState(filteredTasks)

	function onRemoveTask (id: number)  {
		const unRemoved = activeTasks.filter(t => t.id !== id)
		setActiveTasks(unRemoved)
		console.log(unRemoved)
	}

	return(
		<div>
			<h3></h3>
			<div>
				<input />
				<button>+</button>
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
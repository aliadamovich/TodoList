import { Button } from "./Button"
import { Task } from "./TodoList"

type TaskElementType = Task & {
	onChangeHandler: (id: number)=> void
	onRemoveTask: (id: number)=> void
}

export const TaskElement = ({ id, title, isDone, onChangeHandler, onRemoveTask }:TaskElementType) => {
	
	return (
		<li >
			<input type="checkbox" checked={isDone} onChange={()=> onChangeHandler(id)}/>
			<span>{title}</span>
			<Button title="X" callBack={() => { onRemoveTask(id)} }/>
		</li>
	)
}
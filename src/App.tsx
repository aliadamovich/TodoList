import './App.css';
import { TodoList } from './TodoList';

function App() {

	const tasks1: { id: number, title: string, isDone: boolean }[] = 
	[
		{ id: 1, title: 'HTML&CSS', isDone: true }, 
		{ id: 2, title: 'JS', isDone: true }, 
		{ id: 3, title: 'ReactJS', isDone: false }
	]


	return (
			<div className='App'>
			<TodoList tasks={tasks1}/>
			{/* <TodoList tasks={tasks2} /> */}
			</div>
	);
}

export default App;

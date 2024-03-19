import {useSelector} from 'react-redux'
import TodoItem from './TodoItem';
import { selectTodosByFilter } from '../store/selectors';

const TodoList = ({toggleTodoComplete, removeTodo}) => {
	const todos = useSelector(selectTodosByFilter);

	return (
		<ul>
			{
				todos.map(
					todo => (
						<TodoItem 
							key={todo.id}
							toggleTodoComplete={toggleTodoComplete}
							removeTodo={removeTodo} 
							{...todo} 
						/>
					)
				)
			}
		</ul>
	)
}

export default TodoList

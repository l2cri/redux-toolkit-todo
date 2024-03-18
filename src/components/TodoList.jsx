import {useSelector} from 'react-redux'
import TodoItem from './TodoItem';

const TodoList = ({toggleTodoComplete, removeTodo}) => {
	const todos = useSelector(state => state.todos.todos);

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

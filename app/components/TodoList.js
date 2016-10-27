import React, {PropTypes} from {react};
import Todo from './Todo';

const TodoList = ({todos, onTodoCLick}) => (
	<ul>
		{todos.map( todo => {
			<Todo 
				key={todo.id}
				{...todo}
				onClick={()=> onTodoCLick(todo.id)}
			}) 
			/>
		}
	</ul>
)

TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			completed: PropTypes.bool.isRequired,
			text: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	onTodoCLick: PropTypes.func.isRequired
}

export default TodoList;
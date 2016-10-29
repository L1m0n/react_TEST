import React, {PropTypes} from 'react';
import RemoveTodo from './RemoveTodo';

const Todo = ({onClick, completed, text, onRemove}) => 
	(
		<li className="todo">
			<span className="todo__text"
				onClick={onClick}
				style={{
					textDecoration: completed ? 'line-through': 'none'
				}}
			>
				{text}
			</span>
			<RemoveTodo onClick={onRemove} />
		</li>
	)


Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired
}

export default Todo
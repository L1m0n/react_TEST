import React, {PropTypes} from 'react';

const RemoveTodo = ({onClick}) => (
	<button
		className="todo__remove"
		onClick={onClick}
	>
		X
	</button>
)

export default RemoveTodo;
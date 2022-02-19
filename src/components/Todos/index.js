import React from 'react';
import Todo from '../Todo';

function Todos({ todos, onDelete, onEdit }) {
	console.log('todos com', todos);
	return (
		<>
			{todos?.map((todo, i) => (
				<Todo key={i} todo={todo} onDelete={onDelete} onEdit={onEdit} />
			))}
		</>
	);
}

export default Todos;

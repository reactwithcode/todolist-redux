import React from 'react';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import './index.css';

function Todo({ todo, onDelete, onEdit }) {
	console.log('todo com', todo);
	return (
		<>
			<div className="task">
				<div>
					<p className="taskName">
						<span className="textBold">Todo Name:</span> {todo.title}
					</p>
					<p className="taskDate">
						<span className="textBold">Date of Completion:</span>{' '}
						{todo.createdAt}
					</p>
				</div>
				<div>
					<p>
						<FaTimes onClick={() => onDelete(todo.id)} className="delIcon" />
					</p>
					<p>
						<FaPencilAlt onClick={() => onEdit(todo.id)} className="editIcon" />
					</p>
				</div>
			</div>
		</>
	);
}

export default Todo;

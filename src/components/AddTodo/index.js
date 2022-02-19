import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './index.css';

function AddTodo({ onSave }) {
	const [title, setTitle] = useState('');
	const [createdAt, setCreatedAt] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		if (!title && !createdAt) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Fill in your todo and date or close the form!',
			});
		} else if (!title && createdAt) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Fill in your todo!',
			});
		} else if (title && !createdAt) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Fill in your date!',
			});
		} else {
			onSave({ title, createdAt });
		}
		setTitle('');
		setCreatedAt('');
	};

	return (
		<>
			<form className="add-form" onSubmit={onSubmit}>
				<div className="form-control">
					<label>Todo</label>
					<input
						type="text"
						placeholder="add todo"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label>Day & Time</label>
					<input
						type="datetime-local"
						placeholder="add day & time"
						value={createdAt}
						onChange={(e) => setCreatedAt(e.target.value)}
					/>
				</div>
				<input type="submit" className="btn btn-block" value="Save Todo" />
			</form>
		</>
	);
}

export default AddTodo;

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Todos from './components/Todos';
import { getInitialTodos } from './features/todos/actions';

function App() {
	const [todos, setTodos] = useState([]);
	const [showAddTodo, setShowAddTodo] = useState(false);
	const [loading, setloading] = useState(false);

	const dispatch = useDispatch();

	const initialTodos = useSelector((state) => state.todos);

	useEffect(() => {
		dispatch(getInitialTodos());
		setTimeout(() => {
			setloading(false);
		}, 3500);
	}, [dispatch]);

	useEffect(() => {
		localStorage.setItem('todoAdded', JSON.stringify(initialTodos.todos));
	}, [initialTodos.todos]);

	// Fetching todos from Local Storage
	const getTodos = JSON.parse(localStorage.getItem('todoAdded'));
	useEffect(() => {
		if (getTodos == null) {
			setTodos([]);
		} else {
			setTodos(getTodos);
		}
	}, []);

	// Add new todo
	const addTodo = (todo) => {
		const id = uuidv4();
		const newTodo = { id, ...todo };
		setTodos([...todos, newTodo]);
		Swal.fire({
			icon: 'success',
			title: 'Yay...',
			text: 'You have successfully added a new todo!',
		});

		localStorage.setItem('todoAdded', JSON.stringify([...todos, newTodo]));
	};

	// Delete a Todo
	const deleteTodo = (id) => {
		const deleteTodo = todos.filter((todo) => todo.id !== id);
		setTodos(deleteTodo);
		Swal.fire({
			icon: 'success',
			title: 'Oops...',
			text: 'You have successfully deleted a todo!',
		});
		localStorage.setItem('todoAdded', JSON.stringify(deleteTodo));
	};

	// Edit a todo
	const editTodo = (id) => {
		const text = prompt('Todo Name');
		const day = prompt('Day and Time');
		const myData = todos.map((x) => {
			if (x.id === id) {
				return {
					...x,
					title: text,
					createdAt: day,
					id: uuidv4(),
				};
			}
			return x;
		});
		Swal.fire({
			icon: 'success',
			title: 'Yay...',
			text: 'You have successfully edited an existing todo!',
		});
		localStorage.setItem('todoAdded', JSON.stringify(myData));
		window.location.reload();
	};

	return (
		<>
			{loading ? (
				<div className="spinnerContainer">
					<div className="spinner-grow text-primary" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
					<div className="spinner-grow text-secondary" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
					<div className="spinner-grow text-success" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
					<div className="spinner-grow text-danger" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
					<div className="spinner-grow text-warning" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			) : (
				<div className="container">
					<Header
						showForm={() => setShowAddTodo(!showAddTodo)}
						changeTextAndColor={showAddTodo}
					/>
					{showAddTodo && <AddTodo onSave={addTodo} />}
					<h4>Number of Todos: {todos.length}</h4>

					{todos.length > 0 ? (
						<Todos todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
					) : (
						'No Todo Found!'
					)}
				</div>
			)}
		</>
	);
}

export default App;

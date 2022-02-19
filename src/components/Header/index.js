import React from 'react';
import Button from '../Button';
import './index.css';

function Header({ showForm, changeTextAndColor }) {
	return (
		<>
			<header className="header">
				<h2 className="app-header">Todo List App</h2>
				<Button
					onClick={showForm}
					color={changeTextAndColor ? 'red' : 'green'}
					text={changeTextAndColor ? 'Close' : 'Add'}
				/>
			</header>
		</>
	);
}

export default Header;

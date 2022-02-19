import axios from 'axios';

import {
	GET_TODOS_BEGIN,
	GET_TODOS_SUCCESS,
	GET_TODOS_FAIL,
} from './constants';

const baseUrl = 'https://virtserver.swaggerhub.com';

export const getInitialTodos = () => (dispatch) => {
	dispatch({
		type: GET_TODOS_BEGIN,
		loading: true,
		error: null,
	});
	axios(`${baseUrl}/hanabyan/todo/1.0.0/to-do-list`)
		.then((res) =>
			dispatch({
				type: GET_TODOS_SUCCESS,
				loading: false,
				payload: res.data,
				error: null,
			})
		)
		.catch((err) => {
			dispatch({
				type: GET_TODOS_FAIL,
				loading: false,
				error: err,
			});
		});
};


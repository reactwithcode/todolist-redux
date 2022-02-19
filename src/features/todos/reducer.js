import {
	GET_TODOS_BEGIN,
	GET_TODOS_SUCCESS,
	GET_TODOS_FAIL,
} from './constants';

const initialState = {
	loading: false,
	error: null,
	todos: null,
};

function todosReducer(state = initialState, action) {
	const { type, payload, error } = action;

	switch (type) {
		default:
			return {
				...state,
			};
		case GET_TODOS_BEGIN:
			return {
				...state,
				loading: true,
				error: null,
			};
		case GET_TODOS_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				todos: payload,
			};
		case GET_TODOS_FAIL:
			return {
				...state,
				loading: false,
				error: error,
				todos: [],
			};
	}
}

export default todosReducer;

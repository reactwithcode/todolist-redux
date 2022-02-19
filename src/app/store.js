import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import todosReducer from '../features/todos/reducer';

let rootReducers = combineReducers({
	todos: todosReducer,
});

let store = createStore(
	rootReducers,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;

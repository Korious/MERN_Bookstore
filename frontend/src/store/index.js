import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Create this file for your reducers

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;



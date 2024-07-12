import { combineReducers } from 'redux';
import booksReducer from './booksReducer';

const rootReducer = combineReducers({
    books: booksReducer,
    // Add more reducers here if needed
});

export default rootReducer;

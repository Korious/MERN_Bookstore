// src/store/actions/booksActions.js

import axios from 'axios';

export const fetchBooksRequest = () => ({
    type: 'FETCH_BOOKS_REQUEST'
});

export const fetchBooksSuccess = books => ({
    type: 'FETCH_BOOKS_SUCCESS',
    payload: books
});

export const fetchBooksFailure = error => ({
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
});

export const fetchBooks = () => {
    return dispatch => {
        dispatch(fetchBooksRequest());
        axios.get('http://localhost:5555/books')
            .then(response => {
                dispatch(fetchBooksSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchBooksFailure(error));
            });
    };
};

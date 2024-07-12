import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../store/actions/booksActions'; // Define your actions

const BookList = ({ books, loading, error, fetchBooks }) => {
    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Book List</h2>
            {books.map(book => (
                <div key={book._id}>
                    <h3>{book.title}</h3>
                    <p>Author: {book.author}</p>
                    <p>Publish Year: {book.publishYear}</p>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = state => ({
    books: state.books.books,
    loading: state.books.loading,
    error: state.books.error
});

const mapDispatchToProps = {
    fetchBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

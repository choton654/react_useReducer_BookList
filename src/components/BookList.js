import React, { useContext } from 'react';
import { BookContext } from '../context/BookListContext';
import BookDetails from './BookDetails';

const BookList = () => {
  const { books } = useContext(BookContext);
  if (books.length) {
    return (
      <div className='book-list'>
        <ul>
          {books.map((book) => (
            <BookDetails key={book.id} book={book} />
          ))}
        </ul>
      </div>
    );
  } else {
    return <div className='empty'>No Books</div>;
  }
};

export default BookList;

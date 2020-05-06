import React, { useContext } from 'react';
import { BookContext } from '../context/BookListContext';

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <div>
      <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
        <div>{book.title}</div>
        <div>{book.author}</div>
      </li>
    </div>
  );
};

export default BookDetails;

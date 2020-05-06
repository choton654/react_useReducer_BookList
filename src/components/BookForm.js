import React, { useState, useContext } from 'react';
import { BookContext } from '../context/BookListContext';

const BookForm = (props) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const { dispatch } = useContext(BookContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(title, author);
        dispatch({ type: 'ADD_BOOK', book: { title, author } });
        setAuthor('');
        setTitle('');
      }}>
      <input
        type='text'
        name='title'
        placeholder='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        name='author'
        placeholder='author'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type='submit' value='Add Book' />
    </form>
  );
};

export default BookForm;

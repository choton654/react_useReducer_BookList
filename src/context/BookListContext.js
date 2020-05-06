import React, { createContext, useReducer, useEffect } from 'react';
import { BookListReducer } from '../Reducer/BookListReducer';

export const BookContext = createContext();

const BookListProvider = (props) => {
  const [books, dispatch] = useReducer(BookListReducer, [], () => {
    const localData = localStorage.getItem('book');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('book', JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookListProvider;

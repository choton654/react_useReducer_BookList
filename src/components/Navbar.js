import React, { useContext } from 'react';
import { BookContext } from '../context/BookListContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className='navbar'>
      <h1>You Have {books.length} books</h1>
    </div>
  );
};

export default Navbar;

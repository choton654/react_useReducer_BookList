import React from 'react';
import Navbar from './components/Navbar';
import BookListProvider from './context/BookListContext';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className='App'>
      <BookListProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookListProvider>
    </div>
  );
}

export default App;

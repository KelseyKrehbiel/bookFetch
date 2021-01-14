import React from 'react';
import SearchForm from './SearchForm';
import DisplayResults from './DisplayResults';

function App() {
  return (
    <main className='App'>
      <h1>GOOGLE BOOK SEARCH</h1>
      <SearchForm />
      <DisplayResults />
    </main>
  );
}

export default App;
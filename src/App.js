import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import ProductSearch from './Components/ProductSearch/ProductSearch';

function App() {
  return (
    <div className="App">
    <SearchBar />
    <ProductSearch/>
    <ProductSearch/>
    </div>
  );
}

export default App;

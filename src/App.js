import React from 'react';
import './App.css';
import Resultsheet from './components/Resultsheet/Resultsheet'
import Search from './components/Search/Search'
function App() {
  return (
<div className="container">
  <Search></Search>
  <Resultsheet></Resultsheet>
</div>
  );
}

export default App;

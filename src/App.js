import logo from './logo.svg';
import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import StarRating from './components/starRating';
import Books, { bookStuff } from './components/bookStuff'

function App() {
  return (
    <div className="App">
      
      <Books/>
      
      
    </div>
  );
}

export default App;

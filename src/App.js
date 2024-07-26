import React from 'react';
import './App.css';
import Jokes from './Joke';
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {

  return (
    <div className="App">
         {/*Joke component*/}
           <Jokes/>
    </div>
  );
}

export default App;
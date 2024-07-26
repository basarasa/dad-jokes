import React from 'react';
import './App.css';
import Jokes from './Joke';
import Search from "./Search.js";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {

  return (
    <div className="App">
      <Header />
         {/*Joke component*/}
           <Jokes/>
           <Search/>
       <Footer />
    </div>
  );
}

export default App;
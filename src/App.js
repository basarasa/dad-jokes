import React, { useState } from 'react';
import './App.css';
import Jokes from './Joke';
import SearchBar from "./Components/SearchBar.js";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SearchList from './Components/SearchList.js';

function App() {
const [results, setResults] = useState([]);

  return (
    <div className="App">
      <Header />
           <Jokes/>
           <SearchBar setResults={setResults}/>
           <SearchList results={results}/>
       <Footer />
    </div>
  );
}

export default App;
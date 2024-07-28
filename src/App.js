import React, { useState } from 'react';
import './Components/ComponentStyle/App.css';
import Jokes from './Joke';
import SearchBar from "./Components/SearchBar.js";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SearchList from './Components/SearchList.js';

function App() {
const [results, setResults] = useState([]);
const [hasInput, setHasInput] = useState(false);

  return (
    <div className="App">
      <Header />
           <Jokes/>
           <div className="search-bar-container">
           <SearchBar setResults={setResults}  setHasInput={setHasInput}/>
           <SearchList results={results} hasInput={hasInput}/>
            </div>
       <Footer />
    </div>
  );
}

export default App;


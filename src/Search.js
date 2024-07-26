import React, { useState } from 'react';
import { faSearch } from "react-icons/fa"
import axios from 'axios';


const Search = () => {
    const [input, setInput] = useState('');
    const [joke, setJoke] = useState('');

    const apiLink = "https://icanhazdadjoke.com/";
   
    const fetchData = async () => {
    try {
        const res = await axios.get(apiLink, {
            headers: { Accept: "application/json" },
            params: { term: input } // Example if the API supports search parameters
        });
        setJoke(res.data.joke);
        console.log(res.data.joke); // Log the fetched joke
    } catch (error) {
        console.error("Error fetching joke:", error);
    }
};

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    };

return (
  <div className="input-wrapper">
    <faSearch id="search-icon"/>
    <input 
    placeholder="Type to search for joke" 
    value={input} 
    onChange={(e) => handleChange(e.target.value)}
    />     
        </div>
);
};

export default Search;
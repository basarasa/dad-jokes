import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 
import axios from 'axios';
import "./ComponentStyle/SearchBar.css"

const SearchBar = ({ setResults, setHasInput }) => { 
    const [input, setInput] = useState('');

    const apiLink = "https://icanhazdadjoke.com/search";

    const fetchData = async (keyword) => {
        try {
            const res = await axios.get(apiLink, {
                headers: { Accept: "application/json" },
                params: { term: keyword, limit: 30 } 
            });
            const filteredResults = res.data.results.filter(joke => 
                joke.joke.toLowerCase().includes(keyword.toLowerCase())
            );
            setResults(filteredResults); 
        } catch (error) {
            console.error("Error fetching jokes:", error);
        }
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);
        setHasInput(value.trim() !== '');
        if (value) {
            fetchData(value); 
        } else {
            setResults([]);
        }
    };

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input 
                placeholder="Type to search for a joke" 
                value={input} 
                onChange={handleChange}
            />     
        </div>
    );
};

export default SearchBar;

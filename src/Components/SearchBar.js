import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 
import axios from 'axios';

const SearchBar = ({ setResults }) => { 
    const [input, setInput] = useState('');

    const apiLink = "https://icanhazdadjoke.com/search";

    const fetchData = async (keyword) => {
        try {
            const res = await axios.get(apiLink, {
                headers: { Accept: "application/json" },
                params: { term: keyword, limit: 30 } 
            });
            setResults(res.data.results); 
        } catch (error) {
            console.error("Error fetching jokes:", error);
        }
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);
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
                placeholder="Type to search for joke" 
                value={input} 
                onChange={handleChange}
            />     
        </div>
    );
};

export default SearchBar;

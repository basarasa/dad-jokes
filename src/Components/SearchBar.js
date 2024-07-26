import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 
import axios from 'axios';

const SearchBar = ({ setResults }) => { 
    const [input, setInput] = useState('');

    const apiLink = "https://icanhazdadjoke.com/";

    const fetchData = async (keyword) => {
        try {
            const res = await axios.get(apiLink, {
                headers: { Accept: "application/json" }
               
            });
            if (res.data.joke.toLowerCase().includes(keyword.toLowerCase())) {
                setResults([res.data.joke]); 
            } else {
                setResults([]);
            }
        } catch (error) {
            console.error("Error fetching joke:", error);
        }
    };

    const handleChange = (e) => {
        const value = e.target.value
        setInput(value);
        fetchData(value); 
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

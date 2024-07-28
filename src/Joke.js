import React, { useState } from 'react';
import axios from 'axios';
import "./Joke.css";

const Jokes = () => {
    const [joke, setJoke] = useState('');

    const apiLink = "https://icanhazdadjoke.com/";

    const fetchData = async () => {
        try {
        const res = await axios.get(`${apiLink}`, { headers: { Accept: "application/json" } });
        setJoke(res.data.joke);
    } catch (error) {
        console.error("Error fetching joke:", error);
    }
    };
return (
  <div className="joke">
                <button onClick={fetchData}>CLICK ME</button>
            {joke && (
                <div className="data">
                    {joke}
                </div>
            )}
        </div>
    );
};
export default Jokes;
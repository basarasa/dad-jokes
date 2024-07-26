import React, { useState } from 'react';
import axios from 'axios';

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
  <div className="joke__">
            <h1>Jokes:</h1>
               {/*Fetch data from url*/}
                <button onClick={fetchData}>Give me a Dad joke</button>

              {/* Display the joke */}
            {joke && (
                <div className="data">
                    {joke}
                </div>
            )}
        </div>
    );
};
export default Jokes;
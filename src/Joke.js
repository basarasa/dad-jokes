import React, { useState } from 'react';
import axios from 'axios';
import "./Components/ComponentStyle/Joke.css";

const Jokes = () => {
    const [joke, setJoke] = useState('');
    const [buttonText, setButtonText] = useState('Click Me!');

    const apiLink = "https://icanhazdadjoke.com/";

    const fetchData = async () => {
        try {
        const res = await axios.get(`${apiLink}`, { headers: { Accept: "application/json" } });
        setJoke(res.data.joke);
        setButtonText('Next One');
    } catch (error) {
        console.error("Error fetching joke:", error);
    }
    };
return (
  <div className="joke">
                <button onClick={fetchData}>{buttonText}</button>
            {joke && (
                <div className="data">
                    {joke}
                </div>
            )}
        </div>
    );
};
export default Jokes;
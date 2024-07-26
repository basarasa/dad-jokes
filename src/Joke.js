import React, { useState } from 'react';
import axios from 'axios';

const Jokes = () => {
    const [joke, setJoke] = useState([]);
    const apiLink = "https://icanhazdadjoke.com/";
    const fetchData = async () => {
        const res = await axios.get(`${apiLink}`, { headers: { Accept: "application/json" } });
        console.log(res.data);
        console.log(res.data.joke)
    }
return (
   <div>
      <h1>Jokes:</h1>
</div>
);
}
export default Jokes;
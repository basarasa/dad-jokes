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
  <div className="joke__">
            <h1>Jokes:</h1>
               {/*Fetch data from url*/}
                <button onClick={fetchData}>Give me a Dad joke</button>

                     {/*data from api goes here*/}
                    {joke && joke.map((j, index) => (
                         <div className="data" key={index}>
                          {j}
                         </div>
                     ))}
        </div>
    )
}
export default Jokes;
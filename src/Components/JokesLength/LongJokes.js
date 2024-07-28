import React from 'react';
import SearchResultList from '../SearchResultList';
import "./JokesLength.css"


const LongJokes = ({ jokes }) => {
    return (
        <div className="joke-item">
            <h2>Long Jokes</h2>
            {jokes.length > 0 ? (
                jokes.map((joke, id) => (
                    <SearchResultList result={joke.joke} key={id} />
                ))
            ) : (
                <div className="no-jokes">No jokes found</div>
            )}
        </div>
    );
};

export default LongJokes;

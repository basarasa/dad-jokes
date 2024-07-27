import React from 'react';
import SearchResultList from '../SearchResultList';
import "./JokesLength.css"

const MediumJokes = ({ jokes }) => {
    return (
        <div className="joke-item">
            <h2>Medium Jokes</h2>
            {jokes.length > 0 ? (
                jokes.map((joke, id) => (
                    <SearchResultList result={joke.joke} key={id} />
                ))
            ) : (
                <div>No medium jokes found</div>
            )}
        </div>
    );
};

export default MediumJokes;

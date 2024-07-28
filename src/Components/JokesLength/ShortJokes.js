import React from 'react';
import SearchResultList from '../SearchResultList';
import "./JokesLength.css"

const ShortJokes = ({ jokes }) => {
    return (
        <div className="joke-item">
            <h2>Short Jokes</h2>
            {jokes.length > 0 ? (
                jokes.map((joke, id) => (
                    <SearchResultList result={joke.joke} key={id} />
                ))
            ) : (
                <div>No jokes found</div>
            )}
        </div>
    );
};

export default ShortJokes;

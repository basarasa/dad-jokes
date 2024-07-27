import React from 'react';
import SearchResultList from '../SearchResultList';

const LongJokes = ({ jokes }) => {
    return (
        <div>
            <h2>Long Jokes</h2>
            {jokes.length > 0 ? (
                jokes.map((joke, id) => (
                    <SearchResultList result={joke.joke} key={id} />
                ))
            ) : (
                <div>No long jokes found</div>
            )}
        </div>
    );
};

export default LongJokes;

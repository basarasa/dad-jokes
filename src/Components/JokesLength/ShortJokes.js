import React from 'react';
import SearchResultList from '../SearchResultList';

const ShortJokes = ({ jokes }) => {
    return (
        <div>
            <h2>Short Jokes</h2>
            {jokes.length > 0 ? (
                jokes.map((joke, id) => (
                    <SearchResultList result={joke.joke} key={id} />
                ))
            ) : (
                <div>No short jokes found</div>
            )}
        </div>
    );
};

export default ShortJokes;

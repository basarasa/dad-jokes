import React from 'react';
import ShortJokes from './JokesLength/ShortJokes';
import MediumJokes from './JokesLength/MediumJokes';
import LongJokes from './JokesLength/LongJokes';
import "./ComponentStyle/SearchList.css"

const categorizeJokes = (jokes) => {
    const shortJokes = jokes.filter(joke => joke.joke.split(' ').length < 10);
    const mediumJokes = jokes.filter(joke => joke.joke.split(' ').length >= 10 && joke.joke.split(' ').length < 20);
    const longJokes = jokes.filter(joke => joke.joke.split(' ').length >= 20);

    return { shortJokes, mediumJokes, longJokes };
};

const SearchList = ({ results }) => {
    const { shortJokes, mediumJokes, longJokes } = categorizeJokes(results);

    return (
        <div className='results-list'>
            <ShortJokes jokes={shortJokes} />
            <MediumJokes jokes={mediumJokes} />
            <LongJokes jokes={longJokes} />
        </div>
    );
};

export default SearchList;

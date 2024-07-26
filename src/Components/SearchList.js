import React from 'react';
import SearchResultList from './SearchResultList';

const SearchList = ({ results }) => {
    return (
        <div className='results-list'>
            {results.length > 0 ? (
                results.map((joke, id) => (
                    <SearchResultList result={joke} key={id} />
                ))
            ) : (
                <div>No jokes found</div>
            )}
        </div>
    );
};

export default SearchList;

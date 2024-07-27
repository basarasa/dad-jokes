import React from 'react';
import "./ComponentStyle/SearchResultList.css"

const SearchResultList = ({ result }) => {
    return (
        <div className='search-result-list'>{result}</div>
    );
};

export default SearchResultList;
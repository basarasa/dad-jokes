import React, { useState } from 'react';



const SearchList = ({ results }) => {
    return (
        <div className='results-list'>
            {results.length > 0 ? (
                results.map((joke, id) => (
                    <div key={id}>{joke}</div>
                ))
            ) : (
                <div>No jokes found</div>
            )}
        </div>
    );
};

    export default SearchList;
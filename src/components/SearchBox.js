// Import Statements
import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div id='searchBox' className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue" 
            type="search"
            placeholder="Enter the robo to be searched"
            onChange = {searchChange}
            />
        </div>
    );
}

export default SearchBox;
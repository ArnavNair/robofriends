// Import Statements
import React from 'react';
import Card from './Card';

const CardArray = ({robots}) => {
    return(
        <div>
            {
                robots.map((user, index) => <Card key = {index} id = {robots[index].id} name = {robots[index].name} email = {robots[index].email}/>)
            }
        </div>
    );
}

export default CardArray;
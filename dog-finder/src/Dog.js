import React from 'react';
import { Link } from 'react-router-dom';

import './Dog.css';


const Dog = ({ dog }) => {
    
    return (
        <div className='Dog'>
            <h1>This is {dog.name}!</h1>
            <p>They're {dog.age} years old.</p>
            <img className='Dog-img' src={dog.src} alt={dog.name} />

            <ul>
                {dog.facts.map((fact, idx) => <li key={idx}>{fact}</li>)}
            </ul>

            <Link className='Dog-link' to='/dogs'>Go Back</Link>
        </div>
    )
}


export default Dog;
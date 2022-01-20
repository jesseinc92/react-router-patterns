import React from 'react';
import { Link } from 'react-router-dom';
import './Dog.css';


const AllDogs = ({ dogs }) => {

    return (
        <div>
            {dogs.map((dog, idx) => (
                <div key={idx}  className='Dog'>
                    <img className='Dog-img' src={dog.src} alt={dog.name} />
                    <Link className='Dog-link' to={`/dogs/${dog.name.toLowerCase()}`} >{dog.name}</Link>
                </div>
            ))}
        </div>
    )
}


export default AllDogs;
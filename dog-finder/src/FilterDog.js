import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Dog from './Dog';


const FilterDog = ({ dogs }) => {
    const { dogName } = useParams();

    const currentDog = dogs.filter(dog => dog.name.toLowerCase() === dogName);

    const returnElement = currentDog[0] ? <Dog dog={currentDog[0]} /> : <Navigate to='/dogs' />;

    return returnElement;
}


export default FilterDog;
import React from 'react';
import { Link } from 'react-router-dom';
import './AddColor.css';


const AddColor = () => {
    return (
        <div className='AddColor'>
            <h1>Welcome to the color factory.</h1>
            <Link className='AddColor-btn' to='/colors/add'>Add Color</Link>
        </div>
    )
}


export default AddColor;
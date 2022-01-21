import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import './ColorIndex.css';


const ColorIndex = () => {
    const [colorList] = useOutletContext();

    return (
        <div className='ColorIndex'>
            <h2>Select a color.</h2>

            <ul>
                {colorList.map(color => (
                    <Link 
                        className='ColorIndex-btn' 
                        key={color.colorName} 
                        to={`/colors/${color.colorName}`}>
                            {color.colorName}
                        </Link>
                ))}
            </ul>
        </div>
    )
}


export default ColorIndex;
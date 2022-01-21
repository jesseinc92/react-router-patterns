import React from "react";
import { useOutletContext, useParams, Link, Navigate } from "react-router-dom";
import './ColorPage.css';


const ColorPage = () => {
    const [colorList] = useOutletContext();
    const { color } = useParams();

    const currentColor = colorList.filter(c => c.colorName === color);

    if (currentColor[0]) {
        return (
            <div className="ColorPage" style={{ backgroundColor: currentColor[0].colorValue }}>
                {console.log(currentColor[0])}
                <h1>This is {currentColor[0].colorName}</h1>

                <Link className='ColorPage-btn' to='/colors'>Go Back</Link>
            </div>
        );
    } else {
        return <Navigate to='/colors' />
    }
}


export default ColorPage;
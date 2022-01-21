import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';


const App = () => {
    const [colorList, setColorList] = useState([
        {colorName: 'blue', colorValue: '#0000ff'}, 
        {colorName: 'red', colorValue: '#ff0000'}, 
        {colorName: 'green', colorValue: '#00ff00'}
    ]);

    return (
        <main className='App'>
            <Outlet context={[colorList, setColorList]} />
        </main>
    )
}


export default App;
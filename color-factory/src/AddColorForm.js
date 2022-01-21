import React, { useState } from 'react';
import { useOutletContext, Link, useNavigate } from 'react-router-dom';
import './AddColorForm.css';


const AddColorForm = () => {
    const navigate = useNavigate();
    const [colorList, setColorList] = useOutletContext();
    const [formData, setFormData] = useState({ colorName: '', colorValue: '#000000'});

    const handleChange = e => {
        const { name, value } = e.target;

        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        setColorList([...colorList, formData]);
        setFormData({ colorName: '', colorValue: ''});
        navigate('/colors');
    }

    return (
        <div className='AddColorForm'>
            <form onSubmit={handleSubmit}>
                <h2>Add your new color</h2>

                <div className='AddColorForm-all-inputs'>
                    <div className='AddColorForm-input-group'>
                        <label htmlFor='colorName'>Color Name:</label>
                        <input 
                            id='colorName' 
                            name='colorName' 
                            type='text' 
                            value={formData.colorName} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className='AddColorForm-input-group'>
                        <label htmlFor='colorValue'>Color Value:</label>
                        <input 
                            id='colorValue' 
                            name='colorValue' 
                            type='color' 
                            value={formData.colorValue} 
                            onChange={handleChange} 
                        />
                    </div>

                    <button>Submit</button>
                </div>

            </form>
        </div>
    )
}


export default AddColorForm;
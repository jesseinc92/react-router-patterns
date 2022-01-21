import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import AddColor from './AddColor';
import AddColorForm from './AddColorForm';
import ColorIndex from './ColorIndex';
import ColorPage from "./ColorPage";

import './index.css';


const rootElement = document.getElementById('root');
render(
    <BrowserRouter>
        <Routes>
            <Route path='/colors' element={<App />}>
                <Route index element={<><AddColor /><ColorIndex /></>} />
                <Route path='new' element={<AddColorForm />} />
                <Route path=':color' element={<ColorPage />} />
                <Route path='*' element={<Navigate to='/colors' />} />
            </Route>
            <Route path='*' element={<Navigate to='/colors' />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);
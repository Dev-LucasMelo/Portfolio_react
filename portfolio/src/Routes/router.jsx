import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from '../App';
import Projects from '../components/projects/projects';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from '../App';
import Projects from '../components/projects/projects';
import Menu from './../components/menu navigate/menu'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App Menu={<Menu />} />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from '../App';
import Projects from '../pages/page_projects/components/projects_component/projects';
import Menu from '../pages/page_principal/components/menu navigate/menu';

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
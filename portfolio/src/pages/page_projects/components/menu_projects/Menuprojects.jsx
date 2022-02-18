import React from 'react';

//classes do CSS do menu principal pode ser reaproveitado 

import './menuprojects.css'

const MenuProjects = () => {
    return (
        <nav className='menu-projects'>
            <ul className='list'>
                <a className='voltar' href="/"><li className='list-item'>Voltar</li></a>            
            </ul>
        </nav>
    );
}

export default MenuProjects;
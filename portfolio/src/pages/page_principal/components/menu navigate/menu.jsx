import React from 'react';
import './menu.css'

const Menu = () => {
    return (
        <nav className='menu-nav'>
            <ul className='list'>
                <a className='sobrelucas' href="#apresentation_component"><li className='list-item animation'>Sobre Lucas</li></a><span className='space'>|</span> 
                <a href="/projects"><li className='list-item animation'>Projetos</li></a>   
            </ul>
        </nav>
    );
}

export default Menu;

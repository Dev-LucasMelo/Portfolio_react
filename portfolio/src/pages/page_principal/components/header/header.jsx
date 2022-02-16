import React from 'react';
import './header.css'
import luscas from './../../../../images/luscas.jpg'

const Header = () => {
    return (
        <header className='header-component'>
            <div className='container-image' >
                   <img className='image' src={luscas} alt="" />
            </div>
            <div className='title-header'>
                <h2>Fullstack web Developer</h2>
            </div>
        </header>
    );
}

export default Header;
import React from 'react';

//imagens
import luscas from './../../../../images/luscas.jpg'
//icons

import { BiMailSend } from 'react-icons/bi'
import {
    FaWhatsappSquare, FaGithub,
    FaInstagramSquare, FaLinkedin
}
    from 'react-icons/fa'
//css
import './identify.css'

const Identify = () => {
    return (
        <footer id='identify-component' className='identify-component'>
            <div className='border'>
                <div className='identify-box'>
                    <div className='photo-box'>
                        <img className='photo' src={luscas} alt="" />
                    </div>
                    <div className='content-box'>
                        <div classname='legend' >
                            <h1>Desenvolvido por Lucas Melo</h1>
                        </div>
                        <div className='contact'>
                            <a href="mailto:lucasmelodev@gmail.com" target=' _blank'><BiMailSend className='social-icon' /> </a>
                            <a href="https://wa.me/5587000603641" target=' _blank'><FaWhatsappSquare className='social-icon' /></a>
                            <a href="https://github.com/Dev-LucasMelo" target=' _blank'><FaGithub className='social-icon' /></a>
                            <a href="https://www.instagram.com/luscanabis_/" target=' _blank'><FaInstagramSquare className='social-icon' /></a>
                            <a href="https://www.instagram.com/luscanabis_/" target=' _blank'><FaLinkedin className='social-icon' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Identify;
import React from 'react';
import apresentation from './../../../../video/apresentation.mp4'

import './apresentation.css'

const Apresentation = () => {
    return (
        <section id='apresentation_component' className='apresentation_component'>
            <div className='border'>
                <h2>Quem é Lucas Melo ?</h2>
                <div className='apresentation-box'>
                    <video autoPlay controls src={apresentation}>Apresentation</video>
                </div>

            </div>

        </section>
    );
}

export default Apresentation;
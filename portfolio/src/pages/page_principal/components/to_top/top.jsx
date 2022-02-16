import React from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import './top.css'

window.addEventListener('scroll', () => {
    var identify_component = document.getElementById('identify-component')
    var distance = identify_component.getBoundingClientRect().top
    var tela_altura = window.scrollY
    var arrow = document.getElementById('arrow')
    
    if (distance < tela_altura) {
        arrow.classList.add('aparece')
    } else {
        arrow.classList.remove('aparece')
    }

})
const Top = () => {
    return (
        <>
            <a id='arrow' className='arrow' href="#top"> <BsFillArrowUpCircleFill className='arrow-icon' /> </a>
        </>
    );
}

export default Top;
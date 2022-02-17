import React from 'react';
import './projectposter.css'
import dsmovieimage from './../../../../images/projetoDsmovie.jpg'

const ProjectsPoster = () => {
    return (
        <>

            <section className='projects-poster'>
                <div className='image-box'>
                    <img className='image-project' src={dsmovieimage} alt="" />
                </div>
                <div className='description-project'>

                    <div className='tittle-projects'>
                        <h1> <span className='azul'>DsMovie </span> | Projeto Fullstack</h1>
                    </div>
                    <div className='tecs'>
                        <ul>
                            <li className='list-item-projects'><span className='azul'>Backend </span>: Spring boot (java)</li>
                            <li className='list-item-projects'><span className='azul'>Frontend </span>: ReactJs {'&'} Bootstrap</li>
                        </ul>
                    </div>
                    <div>
                        <a className='link-project' href=""><span className='azul'>Clique aqui</span></a> para ver o projeto em produção
                    </div>
                </div>
            </section>

            <section className='projects-poster'>
                <div className='image-box'>
                    <img className='image-project' src={dsmovieimage} alt="" />
                </div>
                <div className='description-project'>

                    <div className='tittle-projects'>
                        <h1> <span className='azul'>DsMovie </span> | Projeto Fullstack</h1>
                    </div>
                    <div className='tecs'>
                        <ul>
                            <li className='list-item-projects'><span className='azul'>Backend </span>: Spring boot (java)</li>
                            <li className='list-item-projects'><span className='azul'>Frontend </span>: ReactJs {'&'} Bootstrap</li>
                        </ul>
                    </div>
                    <div>
                        <a className='link-project' href=""><span className='azul'>Clique aqui</span></a> para ver o projeto em produção
                    </div>
                </div>
            </section>

        </>
    );
}

export default ProjectsPoster;
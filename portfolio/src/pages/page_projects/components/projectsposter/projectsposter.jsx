import React from 'react';
import './projectposter.css'

const ProjectsPoster = ({item,subitems}) => {

    return (
        <>

            <section className='projects-poster'>
                <div className='image-box'>
                    <img className='image-project' src={item.image} alt="" />
                </div>
                <div className='description-project'>

                    <div className='tittle-projects'>
                        <h1> <span className='azul'>{item.tittle}</span> | {item.typeProject}</h1>
                    </div>
                    <div className='tecs'>
                        <ul>
                            {subitems.map((subitem)=>(
                            <>
                                <li><span className='azul'>{subitem.tectype}</span> : {subitem.TecDesc}</li>
                            </>))}
                        </ul>
                    </div>
                    <div classname='link-projects-box'>
                        <a className='link-project' target=' _blank' href={item.link}><span className='azul'>Clique aqui</span></a> para ver o projeto em produção
                    </div>
                </div>
            </section>

        </>
    );
}

export default ProjectsPoster;
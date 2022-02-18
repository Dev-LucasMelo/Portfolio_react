import React from 'react';
import Navigate from '../../../page_principal/components/Navigate/navigate';
import Dados from '../../Dados projects/dados';
import MenuProjects from '../menu_projects/Menuprojects';
import ProjectsPoster from '../projectsposter/projectsposter';
import './projects.css'


const Projects = () => {
    return (
        <div className='projectscontainer-component'>
            <Navigate Menu={<MenuProjects />} />
            {Dados.map((items,key)=>(<>
                <ProjectsPoster key={key} item={items} subitems={items.tecs} />
            </>))}
           
        </div>
    );
}

export default Projects;
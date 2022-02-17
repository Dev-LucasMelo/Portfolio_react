import React from 'react';
import Navigate from '../../../page_principal/components/Navigate/navigate';
import MenuProjects from '../menu_projects/Menuprojects';
import ProjectsPoster from '../projectsposter/projectsposter';

import './projects.css'
const Projects = () => {
    return (
        <div className='projectscontainer-component'>
            <Navigate Menu={<MenuProjects />} />
            <ProjectsPoster />
        </div>
    );
}

export default Projects;
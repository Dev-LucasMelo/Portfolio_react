import React from 'react';
import Navigate from '../../../page_principal/components/Navigate/navigate';
import MenuProjects from '../menu_projects/Menuprojects';

const Projects = () => {
    return (
        <>
            <Navigate Menu={<MenuProjects />} />
        </>
    );
}

export default Projects;
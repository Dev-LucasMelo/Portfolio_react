import React from 'react';

//icons
import { CgList} from 'react-icons/cg'
import { DiHtml5,DiCss3,
         DiJavascript1,DiReact,
         DiNodejsSmall,DiDatabase,
         DiPostgresql,DiGit 
        } from 'react-icons/di'

//components
import Bar from './bar_component/bar_component';

//css
import './skills.css'

const Skills = () => {
    var icons = [
        {
            icon : <DiHtml5 className='icon' /> ,
            progress: '95%'
        },
        {
            icon : <DiCss3 className='icon' /> ,
            progress: '85%'
        },
        {
            icon : <DiJavascript1 className='icon' /> ,
            progress: '70%'
        },
        {
            icon : <DiReact className='icon' /> ,
            progress: '75%'
        },
        {
            icon : <DiNodejsSmall  className='icon'/> ,
            progress: '65%'
        },
        {
            icon : <DiDatabase  className='icon'/> ,
            progress: '60%'
        },
        {
            icon : <DiPostgresql  className='icon'/> ,
            progress: '60%'
        },
        {
            icon : <DiGit  className='icon'/> ,
            progress: '80%'
        },
    ]

   
    return (
        <div className='skills-component'>
            <div className='tittle-skills'>
                <CgList className='icon-skills' />
                <h1>Skills</h1>
            </div>
            <div className='content-skills'> 
                {icons.map((values,key)=>(
                    <>
                        <Bar key={key} icon={values.icon} porcent={values.progress} />
                        {console.log()}
                    </>
                ))}
                
            </div>
        </div>
    );
}

export default Skills;
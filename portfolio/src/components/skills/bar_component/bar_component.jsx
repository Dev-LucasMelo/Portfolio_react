import React from 'react';
import './bar.css'

const Bar = ({icon,porcent}) => {
     
    return (
        <div className='bar-component'>
            <div className='item-bar'><div className='bar-content'>{icon} <div className='content-progress'> <div style={{width: porcent}} className='progress'>{porcent}</div> </div> </div> </div> 
        </div>
    );
}

export default Bar;
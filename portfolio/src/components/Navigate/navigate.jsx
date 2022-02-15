import React from 'react';

import './navigate.css'

const Navigate = ({Menu}) => {
    return ( 
        <div className='navigate-component'>
            <h1 className='tittle'>Dev Lucas Melo</h1>
            {Menu}
        </div>
     );
}
 
export default Navigate;

import React, { useState } from 'react';
import ShrimpC from './ShrimpC';
import './shrimpL.css'



export default function ShrimpL(props) {
 

    if (!props.shrimps || !props.shrimps.length)
        return (<h2>No shrimps</h2>)
    return (
        <div className='shrimplist-container'>

            
            {
                
                props.shrimps.map((shrimp, index) => (
                    <div key={index} style={{ margin: 5 }}>
                        <ShrimpC  {...shrimp} /> 
                        
                    </div>
                ))
            }
        </div>

    )
}


import React from 'react';
import styled from 'styled-components'
import './shrimpC.css'

const ShrimpC = props => {
    return (
        <div className="conten">
       
            
            <div className="list">
            <li className="id" >{props.id}</li>
            <li> {props.day}</li>
            <li className="city">{props.city}</li>
            <li>{props.state}</li>
            <li>{props.productshrimps}</li>
            <li className="size"> {props.size}</li>
            <li>{props.price}</li>
           
          
            </div>
            </div>
        
       
    )
}

export default ShrimpC;
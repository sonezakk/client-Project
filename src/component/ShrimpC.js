import React from 'react';
import styled from 'styled-components'
const Blackg =styled.div`
ฺdisplay: ;
border-radius: 8px;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 11rem;
background: transparent;
color: black;
border: 1px solid black;
`
const ShrimpC = props => {
    return (
        <Blackg>
        <div>
            <div  >
            <span>{props.id}{props.day} {props.city} {props.state} {props.productshrimp}</span>
            </div>
    
        </div>
        </Blackg>
    )
}

export default ShrimpC;
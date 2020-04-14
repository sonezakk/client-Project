import React from 'react'
import styled from 'styled-components'

const Button =styled.button`
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 11rem;
background: transparent;
color: red;
border: 2px solid black;

`

export default function Addshrimp() {
    return (
        <div>
            <div>
                <p>Product</p>
                <input placeholder="black/white shrimp"></input>  
            </div>
            <div>
                <p>size</p>
                <input ></input>  kg 
            </div>
            <div>
                <p>price</p>
                <input ></input>  bath
            </div>
            
 <Button>OK</Button>
        </div>
        
    )
}




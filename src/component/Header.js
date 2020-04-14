import React,{Component} from 'react'
import styled from 'styled-components'

const  MenuHeader =styled.div`
 display :flex;
 align-item :center;
 justify-content : space-around;
 background:lightblue ;
 color :white;
 border : 2px solid blue;
  height :  60 px;
 .nameheder{
     font-size : 10px;
 }
 .sto{
     list-style : none;
     display :flex;
 }
 
`
export default function Header() {
    return (
       <MenuHeader>
           <div className="nameheder">
               <h1>Shirmp</h1>
           </div>
           <div className="sto">
               <li>About</li>
               <li>shop</li>

           </div>
       </MenuHeader>
    )
}

import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    
  } from 'reactstrap';
import firelogin from '../config/firebase';
import styled from 'styled-components'
const Outuser =styled.button`
border: 2px solid grey;
black : red;
border-radius : 8px;
witdth : auto;

.p1 
{
    background-color :red
}


`
export default function Bar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const logout = () =>
    {
        firelogin.auth().signOut();
        
    }
  
    

    return (
        <div>
            
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">แบ่งปันราคากุ้ง</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink  href="/ProductShrimp">ราคากุ้ง</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/ProductShrimp">เพิ่มราคากุ้ง</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/insertshrimp" >กุ้ง</NavLink>
              </NavItem>
            </Nav>
            <NavbarText >
               
                <Outuser>
                  <p1   onClick={logout}>Logout</p1>
                </Outuser>
           
             
                
                
                
               </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
    
}

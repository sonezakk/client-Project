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
const Outuser =styled.a`
border: 1px solid grey;

border-radius : 4px;
cursor: pointer;
p1
{
  font-size : 20px
}
p1:hover 
{

    background-color : #696969
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
          <NavbarBrand href="/home">แบ่งปันราคากุ้ง</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink  href="/ProductShrimp">ราคากุ้ง</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Manage">เพิ่มราคากุ้ง</NavLink>
              </NavItem>
              <NavItem>
                <NavLink   href="/insertshrimp" >กุ้ง API</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Shrimp" >test</NavLink>
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

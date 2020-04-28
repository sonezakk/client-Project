import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import firelogin from "../config/firebase";
import styled from "styled-components";
import "./Bar.css";
const Outuser = styled.a`
  border: 1px solid grey;
  border-radius: 4px;
  cursor: pointer;
  p1 {
    font-size: 20px;
  }
  p1:hover {
    background-color: #696969;
  }
`;
function Bar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const logout = () => {
    firelogin.auth().signOut();
  };

  return (
    <div className="boxBar">
      <div className="inlink-1">
      <img className="imgshrimp" src="06.PNG"></img>
          <Link className="main0" to="/">
            
            <h1>แบ่งปันราคากุ้ง</h1>
          </Link>

        <Link to="/Manage">
          <li>เพิ่มข้อมูลกุ้ง</li>
        </Link>
        <Link to="/Shrimp">
          <li>แสดงราคากุ้ง</li>
        </Link>
        <Link to="/insertshrim">
          <li>แสดงราคากุ้ง(Api)</li>
        </Link>
        
        <div className="logoutfirebase">
          <button  onClick={logout}>Logout</button>
        </div>
        </div>
      
    </div>
  );
}
export default Bar;

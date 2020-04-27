import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";
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
        <Link className="main0" to="/">
          <h1>แบ่งปันกุ้ง</h1>
        </Link>
        <Link to="/Manage">
          <li>เพิ่มข้อมูลกุ้ง</li>
        </Link>
        <Link to="/Shrimp">
          <li>แสดงราคากุ้ง</li>
        </Link>
        <NavLink style="" to="/Shrimp">
        <li>แสดงราคากุ้ง</li>
          </NavLink>

        <div className="logoutfirebase">
          <p onClick={logout}>Logout</p>
        </div>
      </div>
    </div>
  );
}
export default Bar;

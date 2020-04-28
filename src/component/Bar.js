import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import firelogin from "../config/firebase";

import "./Bar.css";

function Bar(props) {
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
        <Link to="/ReduxshrimpL">
          <li>แสดงราคากุ้ง</li>
        </Link>
        <Link to="/insertshrimp">
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

import React, { useState } from "react";

import firelogin from "../../config/firebase";
import './Login.css'
 



const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    firelogin
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const signup = (e) => {
    e.preventDefault();
    firelogin
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className ="body">
       <div className="pic">
          test
        </div>
      <div className="box">
       
        <div className="input">
         
          <p1>Email   </p1>
          <input onChange={(e) => setEmail(e.target.value)} />
          <div className="pass">
          <p1>Password</p1>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
     
         
         
        </div>
        <div className="sub">
          <button onClick={login}>login</button>
          <button onClick={signup}>register</button>
        </div>
      </div>
      
    </div>
  );
};
export default Loginpage;

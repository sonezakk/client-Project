import React, { useState } from "react";

import firelogin from "../../config/firebase";
import "./Login.css";

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
    <div className="body">
      <div className="shrimp">
        <img src="01.jpg" />
      </div>
      <div className="onn">
        <h1 className="title">แบ่งปันราคากุ้ง</h1>
        <div className="box">
          <div className="input">
            <p1>Email </p1>
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
            <p1 onClick={login}>Login</p1>
          </div>
          <div className="re">
            <p1 onClick={signup}>Register</p1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loginpage;

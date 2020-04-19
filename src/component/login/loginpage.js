import React, { useState } from "react";

import firelogin from "../../config/firebase";


const  Loginpage = ()=> {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  const login = (e) => {
    firelogin.auth().signInWithEmailAndPassword(email, password).then((u) => {
      console.log(u)
  }).catch((err) => {
      console.log(err)
  })
}
  const signup = (e) => {
    e.preventDefault()
    firelogin.auth().createUserWithEmailAndPassword(email, password).then((u) => {
      console.log(u)
  }).catch((err) => {
      console.log(err)
  })
}
  return (
    <div>
      <div className="input">
        <input onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="sub">
        <button onClick={login}>login</button>
        <button onClick={signup}>register</button>
      </div>
    </div>
  );
}
export default Loginpage;
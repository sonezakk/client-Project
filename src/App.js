import React, { Component } from 'react'
import {BrowserRouter ,  Router,Switch, Route,Link }   from 'react-router-dom';
import Loginpage from "./component/login/Loginpage";

import  Home from  "./component/Home";
import firelogin from './config/firebase';
import Addshrimp from './component/Addshrimp';

import ProductShrimp from './component/ProductShrimp'
import Insertshrimp from './component/Insertshrimp';

export default class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
    user: {}
    }
    }
    componentDidMount() {
      this.authListener()
    }
    authListener() {
      firelogin.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ user })
        }
        else {
          this.setState({ user: null })
        }
      })
    }



  render() {
    if (this.state.user == null) {
    return (
    <div>
    <Loginpage/>
    </div>
    );
    }
    return(
      <div>
        <div>
          <Home/>
          
        </div>
      <div>
        <Switch>
        <Route  path="/Loginpage" component={Loginpage} />
        <Route  path="/ProductShrimp" component={ProductShrimp}/>
        <Route  path="/insertshrimp" component={Insertshrimp}/>
        </Switch>
      </div>
    </div>
    )
  }
 
}


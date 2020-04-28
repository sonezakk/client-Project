import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loginpage from "./component/login/Loginpage";

import Home from "./component/Home";
import firelogin from "./config/firebase";
import InputFrom from "./component/component-redux/InputFrom";
import Insertshrimp from "./component/Insertshrimp";
import Manage from "./component/component-redux/Manage";
import Main1 from "./component/component-redux/Main1";
import ReduxshrimpL from "./component/component-redux/ReduxshrimpL";

class App extends Component   {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    firelogin.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    if (this.state.user == null) {
      return (
        <div>
          <Loginpage />
        </div>
      );
    }
    return (
      <div>
        <div>
         
        </div>
        <div>
          <Router>
          <Home />
            <div>
              <Switch>
                <Route  exact path="/"  component={Main1} />
                <Route path="/Shrimpreduex" component={ReduxshrimpL} />
                <Route path="/insertshrimp" component={Insertshrimp} />
                <Route path="/InputFrom" component={InputFrom} />
                <Route path="/Manage" component={Manage} />
                <Route path="/ReduxshrimpL" component={ReduxshrimpL}/>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}
export default App;
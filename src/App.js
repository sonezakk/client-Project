import React,{Component} from "react";
import Nav from "./component/ProductShrimp";
import Addshrimp from "./component/Addshrimp";
import Header from "./component/Header";
import {BrowserRouter as Router,Switch }   from 'react-router-dom'
import Shrimp from "./component/Shrimp";
const App = () => {
  // const [count, setCount] = useState(0);

  return (
    
    <React.Fragment>
      <Header/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et est amet
      beatae, alias explicabo ex aliquam accusamus perspiciatis quisquam sunt.
      Quisquam placeat perferendis ipsam numquam magnam molestiae iure cum
      deserunt?
      <Addshrimp/>
      <Shrimp/>
    </React.Fragment>
  );
};

export default App;

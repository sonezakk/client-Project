import React,{Component} from "react";
import Nav from "./component/ProductShrimp";
import Addshrimp from "./component/Addshrimp";
import Header from "./component/Header";
import {BrowserRouter as Router,Switch }   from 'react-router-dom'
import Shrimp from "./component/Shrimp";
import ProductShrimp from "./component/ProductShrimp";
import insertshrimp from "./component/insertshrimp";
import Loginpage from "./component/loginpage";

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    
     <React.Fragment>
       <Loginpage/>
    //   <Header/>
      
    //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Et est amet
    //   beatae, alias explicabo ex aliquam accusamus perspiciatis quisquam sunt.
    //   Quisquam placeat perferendis ipsam numquam magnam molestiae iure cum
    //   deserunt?
    //   <ProductShrimp name="tonesone" size ="55"/>
    //   <insertshrimp/>
    //   <Addshrimp/>
    //   <Shrimp/>
     </React.Fragment>
  );
};

export default App;

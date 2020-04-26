import React from 'react'
import { connect } from 'react-redux';
import ReduxshrimpC from './ReduxshrimpC'
import './ReuxshrimpL.css'
 function Shrimplist(props) {
    const {test} =props;


  return (
    
    <div  className="maplist">
      {
     test.map((item,index)=>(
       <ReduxshrimpC key={index} products={item}/>
     ))
    }
    </div>
    
   )
  
}
export default connect(state=>state.Reduxshrimp)(Shrimplist)

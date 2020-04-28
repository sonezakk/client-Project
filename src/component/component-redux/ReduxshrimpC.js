import React from 'react'
import './ReduxshrimpC.css'
import { connect } from 'react-redux'
 function ReduxshrimpC(props) {
    const {day,city,state,productshrimps,size,price} =props.allShrimps;
    
    return (
        <div className="listmenuheader">
         
        <div  className="listmenu">
            <p>{day}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{productshrimps}</p>
            <p>{size}</p>
            <p>{price}</p> 
        </div>
        </div>
    )
}
export default connect(state=>state.Reduxshrimp)(ReduxshrimpC)
import React from 'react'
import './ReduxshrimpC.css'
 function ReduxshrimpC(props) {
    const {day,city,state,productshrimps,size,price} =props.products;
    
    return (
        <div className="listmenuheader">
        <div  className="listmenu">
            
            <p className="daycss">{day}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{productshrimps}</p>
            <p>{size}</p>
            <p>{price}</p>
          
        </div>
        </div>
    )
}
export default ReduxshrimpC;
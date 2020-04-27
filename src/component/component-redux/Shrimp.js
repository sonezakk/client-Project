
import React, { useState } from 'react'
import {BrowserRouter ,  Router,Switch, Route,Link }   from 'react-router-dom';
import { connect } from 'react-redux'
import ReduxshrimpC from './ReduxshrimpC'
 const Shrimp=(props)=> {
   const {test}=props;
    return (
        <div>
             <div className="product">
                {
                    test.map((item,index)=>{
                        return(
                            <ReduxshrimpC key={index} allShrimps={item}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default connect(state=>state.Reduxshrimp)(Shrimp)
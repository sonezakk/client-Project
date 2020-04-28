import React from 'react'
import { connect } from 'react-redux';
import ReduxshrimpC from './ReduxshrimpC'
import './ReduxshrimpL.css'
 function ReduxshrimpL(props) {
    const {test} =props;


  return (
    
    <div  className="maplist">
       <h2 className="titilelist">ข้อมูลราคากุ้ง</h2>
      <div className="manubar">
          <div className="headerbar">
                <p>วันที่</p>
                <p>จังหวัด</p>
                <p>โซน</p>
                <p>ประเภทกุ้ง</p>
                <p>ไซต์</p>
                <p >ราคา</p>
            </div>
            </div>
    <div className="mapprodect">
      {
     test.map((item,index)=>(
       <ReduxshrimpC key={index} allShrimps={item}/>
     ))
    }
    </div>
      
    </div>
    
   )
  
}
export default connect(state=>state.Reduxshrimp)(ReduxshrimpL)

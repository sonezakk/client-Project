
import React, { useState } from 'react';
import ShrimpC from './ShrimpC';
import './shrimpL.css'
import styled from 'styled-components';
const Noshrimps =styled.div`
text-align:  center;
padding-top:  10px;
align-items: center;
margin:  0;
font-style: italic;
text-shadow: 2px 2px rgb(163, 163, 163);
`


export default function ShrimpL(props) {
 
        
    if (!props.shrimps || !props.shrimps.length)
        {
        return (<Noshrimps>
            <h2>ไม่มีรายการ</h2>
            </Noshrimps>)
        }
        
    return (
        <div className='shrimpcontainer'>
                <h1> รายการกุ้ง</h1>
                
                <div className="listmanu">
                
                     <li>รายการที่</li>
                     <li>วันที่</li>
                     <li>จังหวัด</li>
                     <li>ตำแหน่ง</li>
                     <li>ประเภทกุ้ง</li>
                     <li>จำนวนไซต์</li>
                     <li>ราคา</li>

                     
                    
                 
                </div>
          

            {
                
                props.shrimps.map((shrimp, index) => (
                    <div key={index} style={{ margin: 5 }}>
                        <ShrimpC  {...shrimp} /> 
                        
                    </div>
                ))
            }
            
         
        </div>

    )
}


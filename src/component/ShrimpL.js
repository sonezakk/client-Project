import React, { useState } from "react";
import ShrimpC from "./ShrimpC";

import styled from "styled-components";
const Noshrimps = styled.div`
  text-align: center;
  padding-top: 10px;
  align-items: center;
  margin: 0;
  font-family: 'Pridi', serif;
  text-shadow: 2px 2px rgb(163, 163, 163);
`;
const Hshrimps = styled.div`
  align-items: center;
  // background-color :grey;
  height: 880px;

  padding-top: 10px;
  .shrimpcontainer {
    
    list-style: none;
   
  }
  .shrimpcontainer h1{
    text-align: center;
    color : black;
    text-shadow: 2px 2px rgb(163, 163, 163);
    font-family: 'Pridi', serif;
  }
  .listmanu-5 {
    display: flex;
    justify-content: space-around;

    padding-left: 50px;
    border : 2px solid black;
    border-radius : 8px;
    height : 50px;
    align-items: center;
    font-family: 'Pridi', serif;
    background-color: #f2d8b3
  }
  .listmanu-5 li {
    color: black;
  }
`;

export default function ShrimpL(props) {
  if (!props.shrimps || !props.shrimps.length) {
    return (
      <Noshrimps>
        <h2>ไม่มีรายการ</h2>
      </Noshrimps>
    );
  }

  return (
    <Hshrimps>
      <div className="shrimpcontainer">
        <h1> รายการกุ้ง</h1>

        <div className="listmanu-5">
          <li>วันที่</li>
          <li>จังหวัด</li>
          <li>ตำแหน่ง</li>
          <li>ประเภทกุ้ง</li>
          <li>จำนวนไซต์</li>
          <li>ราคา</li>
        </div>

        <div className="maplist5">
          {props.shrimps.map((shrimp, index) => (
            <div key={index} style={{ margin: 5 }}>
              <ShrimpC {...shrimp} />
            </div>
          ))}
        </div>
      </div>
    </Hshrimps>
  );
}

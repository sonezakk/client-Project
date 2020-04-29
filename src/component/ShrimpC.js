import React from "react";
import "./shrimpC.css";

const ShrimpC = (props) => {
  return (
    <div className="conten5">
      <div className="list5">
        <li> {props.day}</li>
        <li>{props.city}</li>
        <li>{props.state}</li>
        <li>{props.productshrimps}</li>
        <li> {props.size}</li>
        <li>{props.price}</li>
      </div>
    </div>
  );
};

export default ShrimpC;

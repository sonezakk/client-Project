import React, { useState } from "react";
import "./InputFrom.css";
export default function InputFrom(props) {
  const [day, setDay] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [productshrimps, setProductshrimps] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");

  const addShrimps = () => {
    props.addShrimps({ day, city, state, productshrimps, size, price });
    // console.log(day,city,state,productshrimps,size,price)
  };
  return (
    <div className="onboxinput">
      <div className="boxinput">
        <p>Day</p>
        <input  placeholder="วัน/เดือน/ปี" onChange={(e) => setDay(e.target.value)} />
        <p>City</p>
        <input placeholder="จังหวัด" onChange={(e) => setCity(e.target.value)} />
        <p>State</p>
        <input placeholder="โซน" onChange={(e) => setState(e.target.value)} />
        <p>Productshrimps</p>
        <input placeholder="ชนิดกุ้ง" onChange={(e) => setProductshrimps(e.target.value)} />
        <p>Size</p>
        <input placeholder="ตัว/โล" onChange={(e) => setSize(e.target.value)} />
        <p>Price</p>
        <input placeholder="ราคา" onChange={(e) => setPrice(e.target.value)} />
      </div>

      <button className="buttonCreate" onClick={addShrimps}>
        Create
      </button>
    </div>
  );
}

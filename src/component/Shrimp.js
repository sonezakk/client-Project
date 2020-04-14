import React, { useState } from "react";

export default function Shrimp() {
  const [product, setProduct] = useState("");
  const [size, setSize] = useState("");
  const [allproduct, setAllproduct] = useState([]);
  return (
    <div>
      <spen>
        <p>ประเภท</p>
        console.log(e);
        <input type="text"
         placeholder="กุ้งขาว/กุ้งดำ"
         onChange={(e)=>setProduct(e.target.value)}

         />
        <button
        
          
          onClick={e => {
            e.preventDefault();
            setAllproduct;
          }}
        ></button>
      </spen>
      <div className="listproduct">
        <ul>xxxx</ul>
        <ul>xxxx</ul>
      </div>
    </div>
  );
}

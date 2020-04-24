import React, { useState } from "react";

export default function Shrimp() {
  const [product, setProduct] = useState("");
  const [size, setSize] = useState("");
  const [allproduct, setAllproduct] = useState([]);
  const renderallproduct = () => {
    if (allproduct && allproduct.length)
      return allproduct.map((allproduct, index) => {
        return (
          <li key={index}>
            {product},{size}
          </li>
        );
      });
  };
  return (
    <div>
      <spen>
        <p>ประเภท</p>

        <input
          type="text"
          placeholder="กุ้งขาว/กุ้งดำ"
          onChange={(e) => setProduct(e.target.value)}
        />
        <p>ไซต์</p>
        <input
          type="text"
          placeholder="กุ้งขาว/กุ้งดำ"
          onChange={(e) => setSize(e.target.value)}
        />

        <button
          onClick={(e) => {
            // e.preventDefault();
            setAllproduct([...allproduct, product]);
          }}
        >
          ADD
        </button>
      </spen>
      {/* {renderallproduct()} */}
      <div className="listproduct">
        <ul>
          {/* {renderallproduct()} */}
          {allproduct.map((item) => (
            <li key={item.id}>
              Product :{item.product} :{item.size}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

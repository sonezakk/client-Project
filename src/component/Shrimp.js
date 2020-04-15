import React, { useState } from "react";

export default function Shrimp() {
  const [product, setProduct] = useState("");
  const [size, setSize] = useState("");
  const [allproduct, setAllproduct] = useState([]);
  const renderallproduct =() =>{
        if(allproduct && allproduct.length)
            return allproduct.map((allproduct,index) =>{
                return(
                    <li key={index}>
                        {product},{size}
                    </li>
                )
            })
  } 
  return (
    <div>
      <spen>
        <p>ประเภท</p>
        console.log(e);
        <input type="text"
         placeholder="กุ้งขาว/กุ้งดำ"
         onChange={(e)=>setProduct(e.target.value)}

         />
         <p>ไซต์</p>
         <input type="text"
         placeholder="กุ้งขาว/กุ้งดำ"
         onChange={(e)=>setSize(e.target.value)}

         />
         
        <button
        
          
          onClick={e => {
            e.preventDefault();
            setAllproduct([...allproduct,{...product,...size}])
          }}
        >ADD</button>
      </spen>
     {/* {renderallproduct()} */}
      <div className="listproduct">
       <ul>
        {renderallproduct()}
           {/* {allproduct.map(item => <li key={item}>Product :{product}</li> )}
           */}
       </ul>
      </div>
    </div>
  );
}

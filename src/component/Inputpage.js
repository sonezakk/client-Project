
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import InputFrom from './component-redux/InputFrom';

export default function Insertshrimp(props) {
    
    const [shrimps, setShimps] = useState({})
    const [formData, setData] = useState({
      id: 0,
      day: '',
      city: '',
      state:'',
      productshrimps :'',
      size : '',
      price : ''
    });
  
    const { id, day, city,state,productshrimps,size,price } = formData;
  

    const addshrimp = async () => {
        const result = await axios.post(`http://localhost/api/shrimps`, {
            id: 0,
            day: '',
            city: '',
            start:'',
            productshrimps :'',
            size : '',
            price : ''
        })
        console.log(result.data)
      }
    return (
        <div>
            <InputFrom data={formData} ondata={setData} addshrimp={addshrimp}/>
        </div>
    )
}


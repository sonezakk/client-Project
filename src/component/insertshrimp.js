import React, { useState,useEffect } from 'react'
import axios from 'axios'
import ShrimpL from "./ShrimpL"

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
  
    const getshrimps = async () => {
      const result = await axios.get(`http://localhost/api/shrimps`)
      setShimps(result.data)
      console.log(result.data)
    }
      
    useEffect(() => {
      getshrimps()
    }, [])
    return (
       
        <div className="cs">
             
                   
        <ShrimpL  shrimps={shrimps}/>
        </div>
    )
    
}
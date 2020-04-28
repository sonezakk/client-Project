import React, { useState,useEffect } from 'react'
import axios from 'axios'
import ShrimpL from "./ShrimpL"

export default function Insertshrimp(props) {
    
    const [shrimps, setShimps] = useState({})
    
  
  
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
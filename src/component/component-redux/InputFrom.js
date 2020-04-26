import React,{useState} from 'react'

export default function InputFrom(props) {
    const [day, setDay] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [productshrimps, setProductshrimps] = useState('');
    const [size, setSize] = useState('');
    const [price,setPrice]= useState('');
    
    const addShrimps=()=>{
        props.addShrimps({day,city,state,productshrimps,size,price});
        // console.log(day,city,state,productshrimps,size,price)

    }
    return (
        <div>
            <p>day</p>
            <input onChange={e=>setDay(e.target.value)}/>
            <p>city</p>
            <input onChange={e=>setCity(e.target.value)}/>
            <p>state</p>
            <input onChange={e=>setState(e.target.value)}/>
            <p>productshrimps</p>
            <input onChange={e=>setProductshrimps(e.target.value)}/>
            <p>size</p>
            <input onChange={e=>setSize(e.target.value)}/>
            <p>price</p>
            <input onChange={e=>setPrice(e.target.value)}/>
          
            <button onClick={addShrimps}>create</button>
        </div>
    )
}

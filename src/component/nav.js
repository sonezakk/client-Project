import React,{ useState} from 'react'
const Navtest = () => {
    const [news,setNews]  = useState([
        {title : 'test',id :1},
        {title : 'test1',id :2},
        {title : 'test2',id :3},

    ]);
    return (  
        <div className="Nav">
            <ul>
              {news.map(test =>{
                  return(
                  <li key ={test.id}>{test.title}</li>
                    );
              })}
            </ul>
        </div>
     );
}
 
export default Navtest;
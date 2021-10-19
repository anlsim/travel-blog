import {useEffect, useState} from 'react';
import axios from "axios";
import './CounterBar.scss';


export default function CounterBar() {
       const[loading, setloading] = useState(true);
       const[cities, setCities] = useState([]);
   
       useEffect(()=>{
       
              const fetchPost = async ()=> {
              const res = await axios.get("/api/cities");
              setCities(res.data);
              setloading(false);
              }
              fetchPost();
              
       }, []);
       if(loading) return <h4>Loading bar...</h4>

       const start = new Date(2021, 9, 1);
     
       const today = new Date();
       const daysCounter  =  Math.ceil((today - start + 1) / 86400000);
       const cityIndex = cities.length-1;
       return(     
       <div className="counterbar">
              <h2 className="counterbar__text">
                     Days on the road: 
                     <span> {daysCounter}</span>
              </h2>
              <h2 className="counterbar__text">
                     Last City Visited: 
                     <span> {cities[cityIndex].name}, {cities[cityIndex].state}</span>
              </h2>
              <h2 className="counterbar__text">
                     Cities Visited: 
                     <span> {cities.length-1}</span>
              </h2>

              
       
       </div>
        
       );
   
}

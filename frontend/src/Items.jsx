import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'bootstrap'
import { Link } from 'react-router-dom'
import NewClaim from './NewClaim'
import axios from 'axios'
const Items = () => {

//const data=[1,3,4,5,6];
const [data,setData]=useState([]);

useEffect(()=>{
    console.log('useEffect running...');

    fetch('http://localhost:3000/claims').then(response=>response.json()).then(claim=>{
    console.log(claim);    
    setData(claim);
    console.log(data);
    });
},[]); 
console.log('Component rendering...');

    return (
    <>
   
  <div class="row  justify-content-around">
  <h1 className='text-center mt-3'>DASHBOARD</h1>
  <h2 style={{paddingLeft:'30px'}}>Total Claims:{data.length}</h2>
  {
    data.map((data,index)=>
       
        <>
        
        {index%4===0? <div class="w-100"></div>:null}
        <NewClaim data={data} ind={index}/>
        
        </>
       
    )
  }
    </div>
    </>

  )
}

export default Items
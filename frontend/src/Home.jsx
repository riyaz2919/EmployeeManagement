import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
const Home = () => {
  const navigate=useNavigate();
  
  useEffect(()=>{
    axios.get('http://localhost:3000/dashboard').then((res)=>{
      console.log(res);
      if(res.data.Status==="Success"){
        navigate('/');
      }
      else{
        alert("LOGIN To Continue");
        navigate('/login')
      }
    }).catch(err=>{
      navigate('/login');
      console.log(err);
    })
  },[])

  axios.defaults.withCredentials = true;

  const handleDelete=()=>{
    axios.get('http://localhost:3000/logout').then((res)=>{
      if(res.data.Status==='Success'){
        navigate('/login');
      }
      
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <div>    <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#0a69a1',color:'red'}}>
    <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src="brandd.jpg" width="100" height="30" alt=""/>
  </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" >
            <Link to="" class="nav-link navbar-brand active" aria-current="page" >Dashboard</Link>
          </li>
          <li class="nav-item">
            <Link to='/newClaim' class="nav-link navbar-brand active" >Add Claim</Link>
          </li>
          
         
        </ul>
        
          <button onClick={handleDelete} class="btn btn-danger" type="button">Log Out</button>
        
      </div>
    </div>
  </nav>
 <div>
  <Outlet/>
 </div>
  </div>

  )
}

export default Home
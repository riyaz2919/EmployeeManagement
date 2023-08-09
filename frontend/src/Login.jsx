import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, Navigate, useNavigate} from "react-router-dom"
import './style.css'
import axios from 'axios'
const Login = () => {
    axios.defaults.withCredentials = true;
    const navigate = useNavigate()
    const [values,setValues]=useState({username:'',password:''});
    const handleSubmit=(e)=>{
            e.preventDefault();
            axios.post('http://localhost:3000/login',values).then((res)=>{
           // console.log(res);    
            if(res.status===200){
                navigate('/');
            }
                
            }).catch((err)=>{
                    console.log(err);
            })
    }
  return (
    <div class='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div class='p-3 rounded w-25 border loginForm'>
                <div class='text-danger'>
                   
                </div>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div class='mb-3'>
                        <label htmlFor="email"><strong>Username</strong></label>
                        <input type="text" placeholder='Enter Username' name='username' 
                         onChange={e=>setValues({...values,username:e.target.value})}
                          class='form-control rounded-0' autoComplete='off' />
                    </div>
                    <div class='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                        onChange={e=>setValues({...values,password:e.target.value})}
                          class='form-control rounded-0' />
                    </div>
                    <button type='submit' class='btn btn-success w-100 rounded-0'> Log in</button>
                    <p>You are agree to our terms and policies</p>
                </form>
                <Link to='/register'><h6 style={{color:'Yellow'}}> To Register, Click Here</h6></Link>
            </div>
            
        </div>
  )
}

export default Login
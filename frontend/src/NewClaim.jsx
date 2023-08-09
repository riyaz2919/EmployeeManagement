import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const NewClaim = (props) => {
  //const data={id:1}
  const {data}=props
  console.log(props)
  const deleteClaim=(id)=>{
   axios.delete('http://localhost:3000/claims/'+id).then((res)=>{
    if(res.status===200){
      alert("Delete Sucessfully");
      window.location.reload(true);
    }
   }).catch(err=>{
    alert("Failed to Delete");
   })
  }
  return (
    <div class="mt-5 col-3 col-sm-2 " style={{backgroundColor:'#ffbccd',borderRadius:'8px'}}>
            
    <div style={{fontWeight:'bold',fontSize:"20px",display:'flex',
  justifyContent:'space-between'}} class='mt-2'><span class="mr-1">Id</span>
    <span style={{marginLeft:'50px'}}>{data.id}</span>
    </div>
    <div  style={{fontWeight:'bold',fontSize:"20px",display:'flex',
  justifyContent:'space-between'}}class='mt-2'>
    <span class="mr-1">Name</span>
    <span style={{marginLeft:'50px'}}>{data.name}</span> 
    </div>
    <div  style={{fontWeight:'bold',fontSize:"20px",display:'flex',
  justifyContent:'space-between'}} class='mt-2'>
    <span class="mr-1">Department</span>
    <span style={{marginLeft:'50px'}}>{data.dept}</span> 
    </div>
    <div  style={{fontWeight:'bold',fontSize:"20px",display:'flex',
  justifyContent:'space-between'}} class='mt-2'>
    <span class="mr-1">Amount</span>
    <span style={{}}>{data.bill}</span> 
    </div>
    <div  style={{fontWeight:'bold',fontSize:"20px",display:'flex',
  justifyContent:'space-between'}} class='mt-2'>
    <span class="mr-1">Id</span>
    <span style={{marginLeft:'50px'}}>{data.id}</span> 
    </div>
    <div style={{display:'flex',justifyContent:'space-around',marginTop:'15px',marginBottom:'20px'}}>
       <Link to={'/update/'+data.id}><button className='btn btn-success'>Update</button></Link>
    <button onClick={()=>{deleteClaim(data.id)}} className='btn btn-danger'>Delete</button></div>
    </div>
  )
}

export default NewClaim
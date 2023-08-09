import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
const UpdateClaim = () => {
    const {id}=useParams();
    const [data, setData] = useState({
		id: '',
		name: '',
		dept: '',
		bill: '',
	});

    useEffect(()=>{
        axios.get('http://localhost:3000/claims/'+id).then(res=>{
            if(res.status===200){
                console.log(res.data);
                setData(res.data);
            }
        }).catch(err=>{
            console.log(err);
        })
    },[]);

    const handleSubmit=()=>{
        axios.put('http://localhost:3000/claims/'+id,data).then((res)=>{
            if(res.status===200){
                alert("Updated sucessfully");
            }
            else{
                alert("Not Done");
            }
        }).catch(err=>{
            alert("problem occured");
        })
    }
    return (
    <div className='d-flex flex-column align-items-center pt-4'>
    <h2>Update Claim</h2>
    <form class="row g-3 w-50" onSubmit={handleSubmit} >
    <div class="col-12">
            <label for="inputName" class="form-label">Id</label>
            <input type="text" disabled class="form-control" id="inputName" placeholder='Enter Id' autoComplete='off'
            onChange={e => setData({...data, id: e.target.value})} value={data.id}/>
        </div>
        <div class="col-12">
            <label for="inputEmail4" class="form-label">Name</label>
            <input type="text" class="form-control" id="inputEmail4" placeholder='Enter Name' autoComplete='off'
            onChange={e => setData({...data, name: e.target.value})} value={data.name}/>
        </div>
        <div class="col-12">
            <label for="inputSalary" class="form-label">Department</label>
            <input type="text" class="form-control" id="inputSalary" placeholder="Enter Department" autoComplete='off'
            onChange={e => setData({...data, dept: e.target.value})} value={data.dept}/>
        </div>
        <div class="col-12">
            <label for="inputAddress" class="form-label">Bill</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="Bill" autoComplete='off'
            onChange={e => setData({...data, bill: e.target.value})} value={data.bill}/>
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-primary">Update</button>
        </div>
    </form>
</div>
  )
}

export default UpdateClaim
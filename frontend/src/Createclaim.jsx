import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CreateClaim() {
    const [data, setData] = useState({
		id: '',
		name: '',
		dept: '',
		bill: ''
	});

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/claims',data).then((result)=>{
                console.log(result)
                if(result.status===201){
                    alert("done");
                }
                
        }).catch(err=>{
            alert("ensure id is unique")
        })
    }
	return (
		<div className='d-flex flex-column align-items-center pt-4'>
<h2>Add Claim</h2>
<form class="row g-3 w-50" onSubmit={handleSubmit} >
<div class="col-12">
        <label for="inputName" class="form-label ">claimId</label>
        <input type="text" class="form-control" id="inputName" placeholder='Enter Id(number only)' autoComplete='off'
        onChange={e => setData({...data, id: e.target.value})}/>
    </div>
    <div class="col-12">
        <label for="inputEmail4" class="form-label">Name</label>
        <input type="text" class="form-control" id="inputEmail4" placeholder='Enter Name' autoComplete='off'
        onChange={e => setData({...data, name: e.target.value})}/>
    </div>
    <div class="col-12">
        <label for="inputPassword4" class="form-label">Department</label>
        <input type="text" class="form-control" id="inputPassword4" placeholder='Enter Department'
         onChange={e => setData({...data, dept: e.target.value})}/>
    </div>
    <div class="col-12">
        <label for="inputSalary" class="form-label">Bill Amount</label>
        <input type="text" class="form-control" id="inputSalary" placeholder="Enter Bill Amount" autoComplete='off'
        onChange={e => setData({...data, bill: e.target.value})}/>
    </div>
    
    
    <div class="col-12">
        <button type="submit" class="btn btn-primary">Create</button>
    </div>
</form>
</div>


	)
}

export default CreateClaim;
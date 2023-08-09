import React from 'react'
import Login from './Login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Items from './Items';
import Dashboard from './Dashboard';
import NewClaim from './NewClaim';
import CreateClaim from './CreateClaim';
import UpdateClaim from './UpdateClaim';

const App = () => {
  return (
    <div>
       <Router>
        <Routes>
            
            <Route path='/' element={<Home></Home>}>
                 <Route path='' element={<Items></Items>}></Route>
                  <Route path='/update/:id'element={<UpdateClaim></UpdateClaim>}></Route>
                 <Route path='/newClaim' element={<CreateClaim></CreateClaim>}></Route>
            </Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
       </Router>
    </div>
  )
}

export default App
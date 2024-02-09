import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('')

    const navigate = useNavigate()

    //Signup  handler
    const signup=()=>{
    const data={email,password} 
    //* Send Data Through Api 
    axios.post('http://localhost:5555/user/signup',data).then(()=>{
        navigate('/login');
        console.log("Signup successfully");
    }).catch((error)=>{
        console.log(error);
    })

setEmail("");
setPassword("");
    }
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="bg-white p-8 rounded shadow-md w-80">
      <h2 className="text-2xl mb-4 font-semibold">Signup</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
          <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200" onClick={signup}>Login</button>
    </div>
  </div>
  )
}

export default Signup
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
//* creating two useState
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

//* navigate
const navigate = useNavigate();

//* Login Handle Function 
const loginHandle = async () => {

    const data={email,password}
    axios.post('http://localhost:5555/user/login',data).then((res)=>{
    navigate('/');
    console.log("Login succesfully");
    console.log(res.data);
    localStorage.setItem('token', res.data.token)
    }).catch((err)=>{
        console.log(err);
    });

     //* receiving response 
    
    // console.log(loginData);
    // console.log(loginData.token)

    setEmail("");
    setPassword("");

}
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="bg-white p-8 rounded shadow-md w-80">
      <h2 className="text-2xl mb-4 font-semibold">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
          <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200" onClick={loginHandle}>Login</button>
    </div>
    <Link to={'/signup' }>
    Signup
    </Link>
  </div>
  )
}

export default Login
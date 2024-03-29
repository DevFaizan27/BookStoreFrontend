import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import BackButton from '../../components/BackButton'
import { toast } from 'react-hot-toast';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  //Signup  handler
  const signup = () => {
    const data = { email, password }
    //* Send Data Through Api 
    axios.post(`${import.meta.env.VITE_BACKEND_HOST_URL}/user/signup`, data).then((res) => {
    //   if (res.error) {
    //     toast.error(res.error)
    //   } else {
      console.log(res);
        toast.success('Signup success Redirecting to login')
        navigate('/login');
      // }
    }).catch((error) => {
      toast.error(error.message);
    })

    setEmail("");
    setPassword("");
  }
  return (
    <>
      <div className="flex justify-center md:items-center h-screen ">
      <div className="absolute top-2 left-2">
        <BackButton />
      </div>
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4 font-semibold">Signup</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
          <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200" onClick={signup}>Signup</button>
      </div>
    </div>
    </>

  )
}

export default Signup
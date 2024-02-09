import axios from 'axios';
import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import { toast } from 'react-hot-toast';

const CreateBook = () => {
  const[title,setTitle]=useState('');
  const[author,setAuthor]=useState('');
  const[publishYear,setPublishYear]=useState('');
 


  const navigate=useNavigate()
  const submit=()=>{
    const data={
      title,author,publishYear
    }
     axios.post(`${import.meta.env.VITE_BACKEND_HOST_URL}/books`,data,{ headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token'),
  }}).then((res)=>{
      navigate('/');
      toast.success('Book Added Succesfully!!!')
     }).catch((error)=>{
      toast.error(error.message);
     })
  }
    return (
      <>
   
  
     
    <div className="flex justify-center md:items-center md:h-screen">
      <div className='absolute top-2 left-2'>
    <BackButton/>
    </div>
    <div className="bg-white shadow-md rounded px-8 md:pt-6  pt-16 pb-8 mb-4" >
      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
            Author
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="author"
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="publishYear">
            Publish Year
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="publishYear"
            type="text"
            placeholder="Publish Year"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={submit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    </>
    )
  }



export default CreateBook
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BackButton from '../../components/BackButton';

const ShowBook = () => {
  const[book,setBook]=useState({});
  const[loading,setLoading]=useState(false);
  const param=useParams()


  const getBook=async()=>{
    axios.get(`http://localhost:5555/books/${param.id}`,{
      headers: {
        'Content-Type': 'application/json',
        "Authorization": localStorage.getItem('token')
    }
    }).then((response)=>{
    setBook(response.data);
      setLoading(false)
    }).catch((error)=>{
      console.log(error);
    })
  }
  

  useEffect(()=>{
    if(localStorage.getItem('token')){
      getBook();
    }
    
  },[])
  return (
    <>
    <div className='p-4'>
    <BackButton/>
    </div>
     <div className="flex justify-center items-center h-screen">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{book.title}</div>
          <p className="text-gray-700 text-base mb-2">By {book.author}</p>
          <p className="text-gray-700 text-base">Published in {book.publishYear}</p>
          <p className="text-gray-700 text-base">Created at-  {book.createdAt}</p>
          <p className="text-gray-700 text-base">Updated at- {book.updatedAt}</p>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default ShowBook
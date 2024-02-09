import React,{useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';


const DeleteBook =() => {
    const params=useParams();
    const navigate=useNavigate()

    const handleDelete=()=>{
      axios.delete(`${import.meta.env.VITE_BACKEND_HOST_URL}/books/${params.id}`,{
        headers: {
          'Content-Type': 'application/json',
          "Authorization": localStorage.getItem('token')
      }
      }).then((response)=>{
      navigate('/')
  }).catch((err)=>{
      console.log(err);
  })
    }
    
  return (
    <>
     <div className="bg-gray-100 flex justify-center md:items-center h-screen">
     <div className='absolute top-2 left-2'>
    <BackButton/>
    </div>
    <div className="bg-white shadow-md rounded  px-8 pt-16 pb-8 mb-4">
        <h1 className="text-xl font-bold mb-4">Are you sure you want to delete?</h1>
        <div className="flex justify-end">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleDelete}>Delete</button>
        </div>
    </div>
</div>
    </>
  
  )
}

export default DeleteBook
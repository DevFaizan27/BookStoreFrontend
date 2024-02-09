import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const BackButton = () => {
    const navigate=useNavigate();
    const goBack = () => {
       navigate('/')
      };
    
  return (
    <button
      onClick={goBack}
      className="fixed top-10  right-10 m-4 flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      <FaArrowLeft className="mr-2 text-white bg-blue-500" />
    </button>
  )
}

export default BackButton
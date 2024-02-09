import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const BackButton = () => {
    const navigate=useNavigate();
    const goBack = () => {
       navigate(-1)
      };
    
  return (
    <button
      onClick={goBack}
      className="relative top-0 left-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      <FaArrowLeft className="mr-2 text-white bg-blue-500" />
    </button>
  )
}

export default BackButton
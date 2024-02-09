import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { RiEdit2Line, RiDeleteBin6Line, RiEyeLine } from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai';
import {toast} from 'react-hot-toast'

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate=useNavigate();

    const logout = () => {
        localStorage.clear('token');
        navigate('/login');
        toast.success('logged out Succesfully!!')
    }

    
  const getAllBook=async()=>{
    setLoading(true)
    axios.get(`${import.meta.env.VITE_BACKEND_HOST_URL}/books`,{
      headers: {
        'Content-Type': 'application/json',
        "Authorization": localStorage.getItem('token')
    }
    }).then((response)=>{
     setBooks(response.data.data);
        setLoading(false);
    }).catch((error)=>{
      console.log(error);
    })
  }
  

  useEffect(()=>{
    if(localStorage.getItem('token')){
      getAllBook();
    }
    
  },[])

   

    return (
        <>
        {
            loading?<><Spinner/></>:<>
                <div className="flex flex-col md:items-center justify-center md:h-screen">
                <div className="flex md:items-center justify-between md:w-full w-3/4 max-w-screen-md mb-4 p-2">
                    <h1 className="md:text-3xl text-xl md:font-bold  font-serif">Book Tracker<sub className=' font-thin text-blue-500 font-sens'>-record your books readed</sub></h1>
                    <Link to={'/books/create'} className="bg-blue-500 text-white p-2 rounded">
                        <AiOutlinePlus />
                    </Link>
                    <div className='absolute right-2 top-2 font-bold text-red-600'>
                    <button onClick={logout}>logout</button>
                    </div>
                    
                </div>
                <div className="md:w-full m-auto h-4/5 w-4/5 max-w-screen-md overflow-scroll">
                    {loading ? (<Spinner />) : (
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border p-2">Index</th>
                                    <th className="border p-2">Title</th>
                                    <th className="border p-2">Author</th>
                                    <th className="border p-2">Publish Date</th>
                                    <th className="border p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((data, index) => (
                                    <tr key={data._id}>
                                        <td className="border p-2">{index + 1}</td>
                                        <td className="border p-2">{data.title}</td>
                                        <td className="border p-2">{data.author}</td>
                                        <td className="border p-2">{data.publishYear}</td>
                                        <td className="border p-3 flex justify-end  space-x-8">
                                            <Link to={`/books/details/${data._id}`} className="text-blue-500">
                                                <RiEyeLine />
                                            </Link>
                                            <Link to={`/books/edit/${data._id}`} className="text-blue-500">
                                                <RiEdit2Line />
                                            </Link>
                                            <Link to={`/books/delete/${data._id}`} className="text-blue-500">
                                                <RiDeleteBin6Line />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
            </>
        }
        </>
    );
};

export default Home;

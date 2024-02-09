import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { RiEdit2Line, RiDeleteBin6Line, RiEyeLine } from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate=useNavigate();

    const logout = () => {
        localStorage.clear('token');
        navigate('/login')
    }

    
  const getAllBook=async()=>{
    axios.get('http://localhost:5555/books',{
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
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex items-center justify-between w-full max-w-screen-md mb-4">
                <h1 className="text-3xl font-bold">Book Management</h1>
                <Link to={'/books/create'} className="bg-blue-500 text-white p-2 rounded">
                    <AiOutlinePlus />
                </Link>
                <button onClick={logout}>logout</button>
            </div>
            <div className="w-full max-w-screen-md">
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
    );
};

export default Home;

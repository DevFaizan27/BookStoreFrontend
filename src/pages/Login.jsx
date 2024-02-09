import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandle = async () => {
    const data = { email, password };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_HOST_URL}/user/login`,
        data
      );
        navigate("/");
        toast.success("logged in Successfully!!!");
        localStorage.setItem("token", response.data.token);
      
    } catch (error) {
      toast.error(error.message);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center md:items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md md:w-80 w-full">
        <h2 className="text-2xl mb-4 font-semibold">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 mb-4"
          onClick={loginHandle}
        >
          Login
        </button>
        <p className="text-center">
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

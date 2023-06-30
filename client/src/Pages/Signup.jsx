import React,{useState} from 'react'
import axios from 'axios';
import {  useNavigate } from "react-router-dom";

function Signup() {
  const [email,setEmail] = useState();
  const [password , setPassword] = useState();
  const navigate = useNavigate()

  function addUser(e){
    e.preventDefault();
    axios.post('http://localhost:8080/signup', {
        email,password
    }).then(data=>{
        console.log(data)
        if(data){
            alert(" Registered Succesfully!!")
            navigate('/signin');
            
        }else{
            alert("Something went wrong!!")
        }
    })
}
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className=" p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-2xl font-bold text-center text-black ">
           Sign Up
        </h1>
        <form className="mt-6 flex flex-col justify-center items-center" action="#" onSubmit={addUser}>
            <div className="mb-2">
                <label
                    
                    className="block text-sm font-semibold text-gray-800"
                >
                    Email
                </label>
                <input
                    type="email"
                    placeholder='Enter your email'
                    
                    className="block w-full px-4 py-1 mt-2 text-black bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                />
            </div>
            <div className="mb-2">
                <label
                    
                    className="block text-sm font-semibold text-gray-800"
                >
                    Password
                </label>
                <input
                    type="password"
                    placeholder='Enter your password'
                    
                    className="block w-full px-4 py-1 mt-2 text-black bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" onChange={(e)=>{
                           setPassword(e.target.value)
                    }}
                
               />
            </div>
            
            
           
            <div className="mt-6">
            
                <button type="submit" className=" text-center  px-2 py-1 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                    Signup
                </button>
            
            </div>
            
        </form>

       
    </div>
</div>
  )
}

export default Signup;

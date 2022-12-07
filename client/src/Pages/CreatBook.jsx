
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatBook(){
    const [name , setName] = useState();
    const [description , setDescription] = useState();
    const [author , setAuthor] = useState();
    const [price , setPrice] = useState();
    const navigate = useNavigate()
    function addBooks(e){
        e.preventDefault();
        axios.post('http://localhost:8080/setbooks', {
            name,description,author,price
        }).then(data=>{
            console.log(data)
            if(data){
                alert("Book Added Succesfully!!")
                navigate('/booklist')
            }else{
                alert("Something went wrong!!")
            }
        })
    }
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-bold text-center text-black ">
                   Add Books
                </h1>
                <form className="mt-6" action="#" onSubmit={addBooks} >
                    <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" onChange={(e)=>{
                                setName(e.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Author
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" onChange={(e)=>{
                                   setAuthor(e.target.value)
                            }}
                        
                       />
                    </div>
                    <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Description
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:bograyrder-purple-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" onChange={(e)=>{
                               setDescription(e.target.value)
                            }}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Price
                        </label>
                        <input
                            type="number"
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40" onChange={(e)=>{
                                setPrice(e.target.value)
                            }}
                        />
                    </div>
                   
                    <div className="mt-6">
                        <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                            ADD
                        </button>
                    </div>
                </form>

               
            </div>
        </div>
    );
}
export default CreatBook;
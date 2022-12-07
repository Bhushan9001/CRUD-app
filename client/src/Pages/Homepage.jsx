import React from "react";
import {Link} from "react-router-dom"
import Navbar from "../Components/Navbar";
import image from "../View/project.jpg"

function Homepage(){
    
    return(
        
        <>
        <Navbar/>
        <div className='w-full  bg-gradient[#FFFF] text-black'>
                <div className='max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full items-center'>
                     <div className=" flex  items-center mt-24 space-x-44">
                        <div className="  text-xl font-semibold ">
                        <h1>
                            This Website is designed to perform the basic CRUD operations.In this website we will perform this actions on Books.
                        </h1>
                        <Link to = "/createbook">
                        <button className="bg-green-700 w-36 h-12 text-white text-xl rounded-lg shadow-green-300 shadow-lg ml-8 mt-5">
                        Start
                     </button>
                     </Link>
                     </div>
                     <div className="w-full">
                        <img src={image} className="shadow-md " />
                     </div>
                    
                  </div>
                </div>
       </div>
        </>
    );
}

export default Homepage;
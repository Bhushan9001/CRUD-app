import React from "react";
import {Link} from "react-router-dom"
function Navbar() {
let Links = [
    { name:"home",link:'/'},
    { name:"add",link:'/createbook'},
    { name:"List",link:'/booklist'}
]
    return (
        <>
            <div className="w-full h-14 shadow-md border-solid border-2 items-center">
                <div className="flex items-center justify-center ">
                    <div className="items-center mb-3 absolute left-0 top-0 ml-10">
                        <h1 className="font-bold text-5xl text-green-700">
                            <Link to={'/'}>CRUD</Link>
                        </h1>
                    </div>
                    <div className="flex text-2xl font-bold space-x-6 absolute right-20 top-2">
                        <ul className="flex space-x-6">
                           {
                            Links.map((link)=>(
                                <li key={link.name} className ="capitalize hover:scale-110 duration-300 ease-in-out"> 
                                    <Link to = {link.link} className="hover:text-gray-500">{link.name}</Link>
                                </li>
                            ))
                           }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
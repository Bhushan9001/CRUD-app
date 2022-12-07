import axios from "axios";
import React, { useEffect, useState } from "react";
import {RiDeleteBin7Fill} from "react-icons/ri"
import {IoMdCreate} from "react-icons/io"
import { Link } from "react-router-dom";


function BookList() {
    const [books, setBooks] = useState([]);



    useEffect(() => {

        axios.get('http://localhost:8080/getbooks')
            .then(res => {

                setBooks(res.data.book);
                console.log(res.data.book)

            }).catch(err => {
                console.log(err);
            })


    }, []);
    const Delete = (id) => {

        axios.delete(`http://localhost:8080/getbooks/delete/${id}`)
            .then(res => {


                console.log(res.data)

            }).catch(err => {
                console.log(err);
            })
        window.location.reload()
    }
    
          return (
        <>
           


            <h1 className='mt-28 text-4xl text-center'>Book List</h1>



            <div className="overflow-x-auto relative shadow-md rounded-md p-2 ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-black uppercase bg-gray-50 dark:bg-green-800 dark:text-white  ">
                        <tr className=' text-center'>
                            <th scope="col" className="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Author
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Description
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" className="py-3 px-6">
                                
                            </th>

                        </tr>
                    </thead>
                    {books.map((book) => {
                        return (
                            <>

                                <tbody className='overflow-auto'>
                                    <tr className="bg-white border-b text-center  ">
                                    <td className="py-4 px-6 font-bold text-black">
                                            {book.name}
                                        </td>
                                        <td className="py-4 px-6 font-bold text-black">
                                            {book.author}
                                        </td>
                                        <td className="py-4 px-6 font-semibold text-black">
                                            {book.description}
                                        </td>
                                        <td className="py-4 px-6 font-extralight  text-black overflow-hidden">
                                            {book.price}
                                        </td>
                                        <td className="py-4 px-6 font-bold text-black">
                                            
                                            <button onClick={()=>
                                              Delete(book._id)
                                            }>
                                                <RiDeleteBin7Fill size={40}/>
                                            </button>
                                            <Link to={`/updatebook/${book._id}`}>
                                            <button className="ml-5" onClick={()=>{
                                                console.log(book._id)
                                            }} >
                                                <IoMdCreate size={40}/>
                                            </button>
                                            </Link>
                                            
                                        </td>
                                    </tr>

                                </tbody>

                            </>
                        )
                    })}

                </table>
            </div>







        </>
    );
}
export default BookList;
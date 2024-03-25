import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { GoCommentDiscussion } from "react-icons/go";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
const Sidenav = () => {

    const [nav, Setnav] = useState(false);
    const handleNav = () => {
        Setnav(!nav);
        console.log("goes here")
    }

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden fill-blue-500' />
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-slate-300/70 flex flex-col justify-center items-center z-20'>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <a href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <MdOutlineWorkOutline size={20} />
                            <span className='pl-4'>Work</span>
                        </a>
                        <a href="#project" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <GrProjects size={20} />
                            <span className='pl-4'>Project</span>
                        </a>
                        <a href="#testimonial" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <GoCommentDiscussion size={20} />
                            <span className='pl-4'>Testimonals</span>
                        </a>
                    </div >
                ) : (
                    <div>

                    </div>
                )

            }
            <div className='md:block hidden fixed top-[35%] z-10'>
                <div className='flex flex-col ' >
                    <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineHome size={20} />
                    </a>
                    <a href='#work' className='rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <MdOutlineWorkOutline size={20} />
                    </a>
                    <a href='#project' className='rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <GrProjects size={20} />
                    </a>
                    <a href='#testimonial' className='rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <GoCommentDiscussion size={20} />
                    </a>
                </div>
            </div>
        </div >
    )
};


export default Sidenav

import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { GoCommentDiscussion } from "react-icons/go";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BsPerson } from "react-icons/bs";


const baseItems = [
    {
        "name": "Home",
        "href": "#main",
        "icon": <AiOutlineHome size={20} />
    },
    {
        "name": "Work",
        "href": "#work",
        "icon": <MdOutlineWorkOutline size={20} />
    },
    {
        "name": "Project",
        "href": "#project",
        "icon": <GrProjects size={20} />
    },
    {
        "name": "Testimonials",
        "href": "#testimonial",
        "icon": <GoCommentDiscussion size={20} />
    }
]
const Sidenav = () => {

    const [nav, Setnav] = useState(false);
    const handleNav = () => {
        Setnav(!nav);
    }

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden fill-blue-500' />
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-slate-300/70 flex flex-col justify-center items-center z-20'>
                        {
                            baseItems.map((item) => (
                                <a href={item.href} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                                    {item.icon}
                                    <span onClick={handleNav} className='pl-4'>{item.name}</span>
                                </a>
                            ))
                        }

                    </div >
                ) : (
                    <div>

                    </div>
                )

            }
            <div className='md:block hidden fixed top-[35%] z-10'>
                <div className='flex flex-col ' >
                    {
                        baseItems.map((item) => (
                            <a href={item.href} className='rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                {item.icon}

                            </a>
                        ))
                    }

                </div>
            </div>
        </div >
    )
};


export default Sidenav

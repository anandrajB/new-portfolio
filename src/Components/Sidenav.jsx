import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { GoCommentDiscussion } from "react-icons/go";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { TbBulb } from "react-icons/tb";

const baseItems = [
    {
        "name": "Home",
        "href": "#main",
        "icon": <AiOutlineHome size={20} />
    },
    {
        "name": "Skills",
        "href": "#skills",
        "icon": <TbBulb size={20} />
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
];

const Sidenav = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <button
                onClick={handleNav}
                className='absolute top-4 right-4 z-[99] md:hidden text-blue-500'
                aria-label={nav ? "Close menu" : "Open menu"}
            >
                {nav ? (
                    <IoIosClose size={32} />
                ) : (
                    <AiOutlineMenu size={32} />
                )}
            </button>

            {nav && (
                <nav className='fixed inset-0 bg-slate-300/70 flex flex-col justify-center items-center z-20'>
                    {baseItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                            onClick={handleNav}
                        >
                            {item.icon}
                            <span className='pl-4'>{item.name}</span>
                        </a>
                    ))}
                </nav>
            )}

            <nav className='hidden md:block fixed top-[35%] z-10'>
                <div className='flex flex-col'>
                    {baseItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className='rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
                            aria-label={item.name}
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default Sidenav;
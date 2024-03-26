import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import header from "../assets/header.jpeg";
import { CiShare1 } from "react-icons/ci";


const Main = () => {
    return (
        <div id="main" className='w-full h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url(${header})` }}>
            <div
                className="absolute inset-0 overflow-hidden opacity-10 blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="h-full w-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] transform-gpu -skew-y-12"
                />
            </div>
            <div className='w-full h-screen absolute top-0 left-0 bg-gray/60'>
                <div className='absolute max-w-[700px] m-auto bottom-10 left-40 flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-7xl font-semibold text-5xl text-white'>Anand Raj</h1>
                    <h1 className='font-sans bg-slate-950 sm:text-4xl text-blue-500 font-col text-1xl font-normal p-2 mt-5'>Software Engineer</h1>
                    <div className="mt-5 flex items-center gap-x-4">
                        <a href='#about'><button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Explore</button></a>
                        <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            Hire Me <span className="inline-block ml-1"><CiShare1 size={14} /></span>
                        </button>
                    </div>
                </div>

            </div>

        </div >
    );
}

export default Main;

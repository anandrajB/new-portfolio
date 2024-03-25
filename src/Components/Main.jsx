import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import header from "../assets/header.jpeg";

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
                    <div className="mt-10 flex items-center gap-x-4">
                        <a
                            href="#work"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Explore
                        </a>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Main;

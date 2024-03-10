import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import header from "../assets/header.jpeg";

const Main = () => {
    return (
        <div id="main" className='w-full h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url(${header})` }}>
            <div className='w-full h-screen absolute top-0 left-0 bg-gray/60'>
                <div className='absolute max-w-[700px] m-auto bottom-10 left-40 flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-7xl font-semibold text-5xl text-white'>Anand Raj</h1>
                    <h1 className='font-sans bg-slate-950 sm:text-4xl text-blue-500 font-col text-1xl font-normal p-2 mt-5'>Software Engineer</h1>
                    <div className="mt-10 flex items-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Main;

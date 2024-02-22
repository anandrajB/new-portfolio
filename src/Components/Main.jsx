import React from 'react'
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import header from "../assets/header.jpeg"

const Main = () => {
    return (
        <div id="main">
            <img className='w-full h-screen object-cover object-left' src={header} alt='/' />
            <div className='w-full h-screen absolute top-0 left-0 bg-gray/60'>
                <div className='absolute max-w-[700px] m-auto bottom-10 left-40 flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-6xl font-semibold text-4xl  text-white'>Anand Raj </h1>
                    <h1 className='bg-blue-700 rounded-full sm:text-1xl  font-1xl semi-bold p-2 mt-5'>Software Engineer</h1>
                </div>
            </div>
        </div>
    )
}

export default Main

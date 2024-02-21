import React from 'react'
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import header from "../assets/header.jpeg"

const Main = () => {
    return (
        <div id="main">
            <img className='w-full h-screen object-cover object-left' src={header} alt='/' />
            <div className='w-full h-screen absolute top-0 left-0 bg-gray/60'>
                <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl text-white'>new dev</h1>
                    <div className='flex justify-between pt-6 max-w-[150px] w-full'>
                        <FaXTwitter className='cursor-pointer' size={20} />
                        <FaInstagram className='cursor-pointer' size={20} />
                        <FaLinkedin className='cursor-pointer' size={20} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main

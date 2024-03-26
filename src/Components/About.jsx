import React from 'react'
import RevealOnScroll from './Reveal'
import anand from "../assets/anand.png";
const About = () => {
    return (
        <div id="about" className="relative bg-slate-900 py-10 sm:py-10">
            <div className="max-w-full px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-3xl font-bold mb-10 text-center tracking-tight text-indigo-500 sm:text-4xl">About</h2>
                </div>

                <div className='m-auto max-w-2xl lg:max-w-4xl'>

                    <div className='flex flex-col justify-center  items-center sm:flex-col text-left sm:items-start py-1 '>

                        <p className='text-white semi-bold text-3xl'>I am a self motivated and passionate software engineer with a strong background in web development and a passion for building scalable and maintainable applications.</p>

                        <p className='text-white text-lg py-5'>I have a Bachelor of Science in Computer Science from the University of Mumbai and a Master of Computer Applications from the Indian Institute of Technology, Kanpur. I am currently pursuing a Master of Business Administration from the University of Mumbai.</p>
                    </div>
                </div>

            </div>
        </div >


    )
}

export default About

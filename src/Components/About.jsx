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

                    <div className='flex flex-col justify-center  items-center sm:flex-col text-center leading-loose sm:items-start py-1 '>

                        <p className='text-white semi-bold text-3xl'>I'm a developer .</p>
                    </div>
                </div>

            </div>
        </div >


    )
}

export default About

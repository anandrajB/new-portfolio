import React from 'react';
import RevealOnScroll from './Reveal';


const Content = "Experienced backend developer with 3+ years in fintech, specializing in Python, Django, FastAPI, AWS, and React. Skilled in crafting scalable, secure systems and solving complex technical challenges. Consistently delivering high-performance solutions for financial platforms, with a focus on continuous learning and innovation."
const About = () => {
    return (
        <div id="about" className="relative bg-slate-900 py-10 sm:py-10">
            <div className="max-w-full px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <p className="text-4xl font-bold mb-10 text-center tracking-tight text-indigo-500 sm:text-4xl">About</p>
                </div>

                <div className='m-auto max-w-2xl lg:max-w-6xl '>



                    <div
                        className=" absolute inset-0 overflow-hidden opacity-10 blur-3xl"
                        aria-hidden="true"
                    >
                        <div
                            className="h-full w-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] transform-gpu -skew-y-12"
                            style={{
                                clipPath:
                                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                            }}
                        />
                    </div>
                    <div className='flex flex-col justify-center  items-center sm:flex-col text-center  sm:items-start py-1 '>

                        <RevealOnScroll>

                            <p className='text-3xl not-italic sm:text-3xl text-left sm:text-center text-white sm:text-white semi-bold leading-normal'>
                                {Content}
                            </p>

                        </RevealOnScroll>
                    </div>
                </div>

            </div>
        </div >


    )
}

export default About

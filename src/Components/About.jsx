import React from 'react'
import RevealOnScroll from './Reveal'
const About = () => {
    return (
        <div id="about" className="relative bg-slate-900 py-10 sm:py-10">
            <div className="max-w-full px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-3xl font-bold mb-10 text-center tracking-tight text-indigo-500 sm:text-4xl">About</h2>
                </div>

                <div className="flex flex-col justify-center items-center sm:flex-row sm:items-start py-1">
                    <div className="rounded-lg p-6 mr-0 sm:mr-6 mb-6 sm:mb-0">
                        <RevealOnScroll>
                            <h2 className="mb-4 text-2xl font-extrabold text-white">Get started</h2>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae ex non quam auctor vehicula eu nec ex.</p>
                            <div
                                className="absolute inset-0 overflow-hidden opacity-10 blur-3xl"
                                aria-hidden="true"
                            >
                                <div
                                    className="h-60 w-60 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] transform-gpu -skew-y-12"
                                />
                            </div>
                            <a href="#" className="inline-flex items-center mt-4 text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Get started
                                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </RevealOnScroll>
                    </div>
                    <RevealOnScroll>
                        <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-auto">
                            <h2 className="mb-4 text-2xl font-extrabold text-gray-900">Contact Information</h2>
                            <div className="flex items-center mb-2">
                                <svg className="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                                <span className="text-gray-600">9677210269</span>
                            </div>

                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm14 0v6m-7-6v6m-7 6a2 2 0 002 2h14a2 2 0 002-2v-6m-2-2h-4a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2z"></path>
                                </svg>
                                <span className="text-gray-600">anand98.ar@gmail.com</span>
                            </div>

                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </div>


    )
}

export default About

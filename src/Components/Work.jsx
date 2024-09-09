import React from 'react';

import RevealOnScroll from './Reveal'

const data = [
    {
        year: 'October 2022 -  present',
        title: 'SDE L3',
        Company: 'Venzo technologies pvt ltd , Chennai',
        details: 'Engaged with multiple projects in fintech and edtech sectors, proficient in both backend and frontend development. Delivered success in collaborating with cross-functional teams to deliver high-quality software solutions across multiple projects. Skilled in providing comprehensive technical support and excelling in rapid prototyping, proof-of-concept, and MVP development. Committed to delivering great excellence throughout the SDLC .'
    },
    {
        year: 'November 2021 - October 2022',
        title: 'Software Engineer',
        Company: 'Venzo technologies pvt ltd , Chennai',
        details: 'Bootstrapped fintech project for loan management and invoice discounting. Communicated with stakeholders to understand their requirements and worked along the pipeline . '
    },
    {
        year: 'December 2020 - November 2021',
        title: 'Junior Software Engineer',
        Company: 'Desss applying technologies pvt ltd , Chennai',
        details: 'Engaged with building web scraping application and developed microservices for job posts data scrapping techniques'
    }
]
const Work = () => {
    return (
        <div id="work" className="relative bg-slate-900 py-10 sm:py-10">
            <div className="max-w-full px-6 py-0 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-3xl font-bold mb-10 text-center tracking-tight text-indigo-500 sm:text-4xl">Work</h2>
                </div>

                <RevealOnScroll>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700 mx-auto max-w-4xl lg:max-w-4xl">
                        <div
                            className="absolute inset-0 overflow-hidden opacity-10 blur-3xl"
                            aria-hidden="true"
                        >
                            <div
                                className="h-full w-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] transform-gpu -skew-y-12"
                            />
                        </div>
                        {
                            data.map((item, index) => (
                                <li className="mb-10 ms-6">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.year}</time>

                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>

                                    <p className='my-0.5 text-base font-normal text-gray-500'> {item.Company}</p>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.details}</p>

                                </li>
                            ))
                        }

                    </ol>
                </RevealOnScroll>
            </div>
        </div>

    )
}

export default Work

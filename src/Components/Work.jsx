import React from 'react';

import RevealOnScroll from './Reveal'

const data = [
    {
        year: 2020,
        title: 'developer',
        duration: '2 years',
        details: 'Use a library like Faker.js to generate random words and sentences to assemble into a lorem ipsum paragraph on the fly.'
    },
    {
        year: 2020,
        title: 'developer',
        duration: '2 years',
        details: 'Use a library like Faker.js to generate random words and sentences to assemble into a lorem ipsum paragraph on the fly.'
    },
    {
        year: 2020,
        title: 'developer',
        duration: '2 years',
        details: 'Use a library like Faker.js to generate random words and sentences to assemble into a lorem ipsum paragraph on the fly.'
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
                        <li className="mb-10 ms-6">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2022 -  present</time>

                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">SDE L3</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>

                        </li>

                        <div
                            className="absolute inset-0 overflow-hidden opacity-10 blur-3xl"
                            aria-hidden="true"
                        >
                            <div
                                className="h-full w-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] transform-gpu -skew-y-12"
                            />
                        </div>
                        <li className="mb-10 ms-6">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 2021 - October 2022</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Software Developer</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                        </li>
                        <li className="mb-10 ms-6">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Junior Developer</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                        </li>
                    </ol>
                </RevealOnScroll>
            </div>
        </div>

    )
}

export default Work

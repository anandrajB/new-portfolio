import React from 'react';



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
            <h1 className='text-4xl font-bold text-center text-indigo-500 '>Work</h1>

            <ol className="relative border-s border-gray-200 dark:border-gray-700 mx-auto max-w-4xl lg:max-w-4xl">
                <li class="mb-10 ms-6">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>

                </li>
                <li class="mb-10 ms-6">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                </li>
                <div
                    className="absolute inset-0 overflow-hidden opacity-10 blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="h-full w-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] transform-gpu -skew-y-12"
                    />
                </div>

                <li class="ms-6">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
            </ol>


        </div>
    )
}

export default Work

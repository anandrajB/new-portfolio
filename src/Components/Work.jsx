import React from 'react';
import Workitems from './Workitems'



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
        <div id="work" className='max-w-full m-auto md:pl-20 p-4 py-16 bg-black'>
            <h1 className='text-4xl font-bold text-center text-white'>Work</h1>
            {
                data.map((item, index) => (
                    <Workitems key={index} year={item.year} title={item.title} duration={item.duration} details={item.details} />
                ))
            }
        </div>
    )
}

export default Work

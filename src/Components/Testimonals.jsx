
const testimonials = [
    [
        [
            {
                body: 'It is great to work with anand ',
                author: {
                    name: 'Mohammed Sheik',
                    handle: 'msheikali',
                },
            },

        ],
        [
            {
                body: 'Rapidly fast, Crystal clear and Independent. Good to have a resource like anand in any team.',
                author: {
                    name: 'Jenith kumar',
                    handle: 'jenithkumar',
                },
            },

        ],
    ],
    [
        [
            {
                body: 'Your work performance has been exemplary, consistently demonstrating professionalism and offering valuable suggestions and willingness to improvise as well as sets you apart is your ability to tackle complex tasks with ease, delivering great results without unnecessary fanfare',
                author: {
                    name: 'Krithika Sriram',
                    handle: 'krithika',
                },
            },
        ],
        [
            {
                body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
                author: {
                    name: 'Leonard Krasner',
                    handle: 'leonardkrasner',
                },
            },

        ],
    ],
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

import RevealOnScroll from './Reveal'


import React from 'react'

const Testimonals = () => {
    return (
        <div id="testimonial" className="relative isolate bg-slate-900  py-5 sm:py-10">


            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-3xl font-bold text-center tracking-tight text-indigo-500 sm:text-4xl">Testimonials</h2>
                </div>
                <RevealOnScroll>
                    <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">


                        {testimonials.map((columnGroup, columnGroupIdx) => (
                            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                                {columnGroup.map((column, columnIdx) => (
                                    <div
                                        key={columnIdx}
                                        className={classNames(
                                            (columnGroupIdx === 0 && columnIdx === 0) ||
                                                (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                                                ? 'xl:row-span-2'
                                                : 'xl:row-start-1',
                                            'space-y-8'
                                        )}
                                    >
                                        {column.map((testimonial) => (
                                            <figure
                                                key={testimonial.author.handle}
                                                className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                                            >
                                                <blockquote className="text-gray-900">
                                                    <p>{`“${testimonial.body}”`}</p>
                                                </blockquote>
                                                <figcaption className="mt-6 flex items-center gap-x-4">
                                                    <div>
                                                        <div className="font-semibold">{testimonial.author.name}</div>
                                                        <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>
            </div>
        </div>
    )
}

export default Testimonals

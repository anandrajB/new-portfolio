const featuredTestimonial = {
    body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
    author: {
        name: 'Brenna Goyette',
        handle: 'brennagoyette',
    },
}
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
                body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
                author: {
                    name: 'Lindsay Walton',
                    handle: 'lindsaywalton',
                },
            },

        ],
    ],
    [
        [
            {
                body: 'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.',
                author: {
                    name: 'Tom Cook',
                    handle: 'tomcook',
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
            <div
                className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40"
                />
              </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-3xl font-bold text-center tracking-tight text-indigo-500 sm:text-4xl">Testimonials</h2>
                </div>
                <RevealOnScroll>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">

                        <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
                            <blockquote className="p-1 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                                <p>{`“${featuredTestimonial.body}”`}</p>
                            </blockquote>
                            <figcaption className="flex flex-wrap md:ml-6 sm:ml-2 items-center px-6 py-3 sm:flex-nowrap">

                                <div >
                                    <div className="font-semibold">{featuredTestimonial.author.name}</div>
                                    <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
                                </div>
                            </figcaption>
                        </figure>
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

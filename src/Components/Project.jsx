
import pythonimage from "../assets/python.png";
import react from "../assets/react.svg";
import postgres from "../assets/postgre.png";
import { CiShare1 } from "react-icons/ci";
import django from "../assets/djs.png";
import fastapi from "../assets/fasts.svg";
import mongo from "../assets/mongo.png"
import elastic from "../assets/elas.png"
import redis from "../assets/rr.png"
import socket from "../assets/np.png"
import neo from "../assets/cp.png"
import celery from "../assets/cel.png"
import aws from "../assets/as.png"
import ploty from "../assets/ploty.png"
import RevealOnScroll from './Reveal';
import pandas from "../assets/pandas.png"
const posts = [
    {
        id: 1,
        title: 'Krediq',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',

        datetime: '2020-03-16',
        category: ["Fintech", "Backend", "Saas"],
        logos: [
            pythonimage, django, postgres, elastic, redis, socket, celery, aws
        ],
    },
    {
        id: 2,
        title: 'Kredfin',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',

        datetime: '2020-03-16',
        category: ["Fintech", "Backend"],
        logos: [
            pythonimage, fastapi, postgres
        ],
    },
    {
        id: 3,
        title: 'krediflo',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',

        datetime: '2020-03-16',
        category: ["Package", "Backend", "Fintech"],
        logos: [
            pythonimage, django,
        ],
    },
    {
        id: 4,
        title: 'Kredibot',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',

        datetime: '2020-03-16',
        category: ["Fintech", "Frontend", "Saas"],
        logos: [
            pythonimage, react, socket
        ],
    },
    {
        id: 5,
        title: 'kredichat',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',

        datetime: '2020-03-16',
        category: ["Fintech", "Backend"],
        logos: [
            pythonimage, fastapi, mongo, socket
        ],
    },
    {
        id: 6,
        title: 'AnalytiQ',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',

        datetime: '2020-03-16',
        category: ["Fintech", "Backend"],
        logos: [
            pythonimage, ploty, neo, postgres, pandas
        ],
    },
    {
        id: 7,
        title: 'TF Masters',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',

        datetime: '2020-03-16',
        category: ["Edtech", "Backend"],
        logos: [
            pythonimage, django, postgres, socket
        ],
    },

]




import React from 'react'

const Project = () => {
    return (
        <div id="project" className="bg-slate-900 py-10 bg-slate-900sm:py-10 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-indigo-500 sm:text-4xl">Projects</h2>

                </div>
                <RevealOnScroll>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="flex flex-col items-start justify-between">
                                <div className="relative w-full">
                                    <img
                                        src={post.imageUrl}
                                        alt=""
                                        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>

                                <div className="max-w-xl">
                                    <div className="mt-8 flex items-center gap-x-5 text-xs">

                                        <div className='flex flex-row justify-end  gap-x-3'>
                                            {
                                                post.category.map((title) => (
                                                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{title}</span>
                                                )

                                                )
                                            }


                                        </div>
                                    </div>

                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                            <a>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                                <div
                                                    className="absolute inset-0 overflow-hidden opacity-10 blur-3xl"
                                                    aria-hidden="true"
                                                >
                                                    <div className="h-full w-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] transform-gpu -skew-y-12" />
                                                </div>
                                            </a>
                                        </h3>
                                        <div className="relative mt-8 flex items-center gap-x-4">
                                            {post.logos.map((logo, index) => (
                                                <img src={logo} className="w-5 h-5" alt="Flaticon Icon" />
                                            ))}
                                        </div>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                            {post.description}
                                        </p>
                                    </div>
                                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mt-3 px-3 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Show project
                                        <CiShare1 size={19} className='pl-1' />
                                    </button>

                                </div>
                            </article>
                        ))}
                    </div>
                </RevealOnScroll>
            </div>
        </div >
    )
}

export default Project


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
import pytorch from "../assets/pytorch.png"
import krediq from "../assets/krediq.png"
import kredifin from "../assets/kredifin.png"
import analytiq from "../assets/analytiq.png"
import tfm from "../assets/tfm2.png"
import kredibot from "../assets/kredibot.png"
import krediflo from "../assets/krediflo.png"
import kredichat from "../assets/kredichat.png"
import flexitable from "../assets/flexitable.png"
const posts = [
    {
        id: 1,
        title: 'Krediq',
        href: '#',
        description:
            'An invoice discounting platform and a flexible funding solution designed to help business for to unlock their capital and leverage their unpaid invoices. A SaaS application can be easily integrated for multiple NBFC for efficient loan and invoice management',
        imageUrl: krediq,

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
            'A cutting-edge API solution designed to streamline financial management, providing a centralized solution for businesses to manage their finances and  repayable invoices and to maintain a comprehensive ledger for every accounting entry',
        imageUrl: kredifin,
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
            'Python SDK tailored for Django applications, enabling seamless handling of Finite State Machine (FSM) state transitions. This SDK specializes in improved action-based transitions, multi-level signature approvals, and provides robust solutions for managing states between different role-players within the Django framework. Easy and seamless integration with other Django applications.',
        imageUrl: krediflo,
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
            'A Node SDK tailored for react applications, enabling chatbot interface with banks and customers within the krediq ecosystem and enabling a end to end communication within parties . ',
        imageUrl: kredibot,

        category: ["Fintech", "Frontend", "Saas"],
        logos: [
            react, socket,
        ],
    },
    {
        id: 5,
        title: 'kredichat',
        href: '#',
        description:
            'An dynamic bidirectional communication platform integrated within the Krediq ecosystem that seamlessly connects customers, sellers, and the bank. This intelligent chat solution transforms financial interactions into engaging conversations and ensuring a personalized and efficient experience.',
        imageUrl: kredichat,
        category: ["Fintech", "Backend"],
        logos: [
            pythonimage, fastapi, mongo, socket, pytorch
        ],
    },
    {
        id: 6,
        title: 'AnalytiQ',
        href: '#',
        description:
            'A Dashboard for banks acts as a back office to view their customers profiling , ageing invoices and credit risk analysis. Enhancing with  a comprehensive overview of the customer’s financial performance and helps in making informed decisions.',
        imageUrl: analytiq,
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
            'An online ed-tech platform to boost your trade finance knowledge and marketplace for trade finance community members .',
        imageUrl: tfm,
        category: ["Edtech", "Backend"],
        logos: [
            pythonimage, django, postgres, socket
        ],
    },
    {
        id: 8,
        title: 'FlexiTable',
        href: '#',
        description:
            'An no code database creation application build to minimise the application CRUD which works as Database as a services to applications (DBaas) and minimalistic version of baserow and airtable',
        imageUrl: flexitable,
        category: ["DBaas", "Fullstack"],
        logos: [
            pythonimage, django, react, postgres
        ],
    },

]




import React, { useState } from 'react'

const Project = () => {
    const [showDescriptions, setShowDescriptions] = useState(posts.map(() => false));

    const toggleDescription = (index) => {

        setShowDescriptions(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    }

    return (
        <div id="project" className="bg-slate-900 py-10 bg-slate-900sm:py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-indigo-500 sm:text-4xl">Projects</h2>
                </div>
                <RevealOnScroll>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post, index) => (
                            <article key={post.id} className="flex flex-col items-start justify-between">
                                <div className="relative w-full">
                                    <img
                                        src={post.imageUrl}
                                        width={55}
                                        height={50}
                                        alt=""
                                        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>

                                <div className="max-w-xl">
                                    <div className="mt-5 flex items-center gap-x-5 text-xs">
                                        <div className='flex flex-row justify-end gap-x-3'>
                                            {post.category.map((title) => (
                                                <span key={title} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{title}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                            <a>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                                <div className="absolute inset-0 overflow-hidden opacity-10 blur-3xl" aria-hidden="true">
                                                    <div className="h-full w-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] transform-gpu -skew-y-12" />
                                                </div>
                                            </a>
                                        </h3>
                                        <div className="relative mt-5 flex items-center gap-x-4">
                                            {post.logos.map((logo, index) => (
                                                <img key={index} src={logo} className="w-5 h-5" alt="Flaticon Icon" />
                                            ))}
                                        </div>
                                        <p className={`${showDescriptions[index] ? '' : 'line-clamp-3'} mt-5 leading-6 text-gray-500`}>
                                            {post.description}
                                        </p>

                                    </div>
                                    <div className="flex flex-col items-left gap-x-4">
                                        <a
                                            onClick={() => toggleDescription(index)}
                                            className="cursor-pointer text-blue-500 hover:text-blue-700 mt-2 "
                                        >
                                            {showDescriptions[index] ? 'Read less' : 'Read more'}
                                        </a>
                                        <a href='https://www.krediq.com'>
                                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mt-3 px-3 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Show project

                                                <CiShare1 size={19} className='pl-1' />
                                            </button>
                                        </a>
                                    </div>

                                </div>
                            </article>
                        ))}
                    </div>
                </RevealOnScroll>
            </div>
        </div>
    );
}

export default Project;

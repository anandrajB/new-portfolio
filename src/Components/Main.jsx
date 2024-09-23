import React from 'react';
import header from "../assets/header.jpeg";
import { CiShare1 } from "react-icons/ci";


const navigation = [

    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/anandraj98/',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.003z" />
            </svg>
        )
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/anand_raj_098/',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'X',
        href: 'https://twitter.com/anandch23157938',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
            </svg>
        ),
    },
    {
        name: 'GitHub',
        href: 'https://github.com/anandrajB',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },

]


const Main = () => {
    return (
        <div id="main" className='w-full h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url(${header})` }}>
            <div
                className="absolute inset-0 overflow-hidden opacity-10 blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="h-full w-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] transform-gpu -skew-y-12"
                />
            </div>
            
            
            <div className='w-full h-screen absolute top-0 left-0 bg-gray/60'>
                <div className='absolute max-w-[700px] m-auto bottom-10  left-10 flex flex-col sm:left-40 justify-center lg:items-start items-center'>
                    <h1 className='sm:text-7xl font-semibold text-5xl  text-white'>Anand Raj</h1>
                    <h1 className='font-sans bg-slate-950 sm:text-4xl  text-blue-500 font-col text-1xl font-normal p-2 mt-5'>Software Engineer</h1>
                    <div className="mt-5 flex items-center gap-x-4">
                        <a href= "#about">
                        <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Explore</button>
                        </a>
                        <a href = 'https://www.canva.com/design/DAGRYTYOVBA/5JXsCa6KD4yinqfW8_GSpw/view?utm_content=DAGRYTYOVBA&utm_campaign=designshare&utm_medium=link&utm_source=editor' download>
                        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                        Download Resume
                        </button>
                        </a>
                        
                        
                        <a href='https://www.linkedin.com/in/anandraj98/' target='_blank'>
                            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                Hire Me <span className="inline-block ml-1"><CiShare1 size={14} /></span>
                            </button>
                        </a>
                        
                    </div>
                    <div className="flex justify-center mt-5 space-x-6 md:order-2">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-teal-300 cursor-pointer hover:text-gray-500"
                            >
                                <span className="sr-only">{item.name}</span>
                                {React.createElement(item.icon, {
                                    className: "h-7 w-7",
                                    "aria-hidden": "true"
                                })}
                            </a>
                        ))}
                    </div>
                </div>

            </div>

        </div >
    );
}

export default Main;

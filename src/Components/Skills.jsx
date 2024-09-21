import django from "../assets/djs.png";
import python from "../assets/python.png";
import aws from "../assets/as.png";
import react from "../assets/react.svg";
import React from 'react'
import fastapi from "../assets/fasts.svg";
import RevealOnScroll from './Reveal'
import vue from '../assets/vue.png';
const skills_logo = [python, django, fastapi, aws, react, vue];

const Skills = () => {
    return (
        <div id="skills" className="bg-gray-900 py-10 sm:py-10">
            <div className="mx-auto max-w-2xl mb-10 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-indigo-500 sm:text-4xl">Skills</h2>
            </div>

            <RevealOnScroll>

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
                        aria-hidden="true"
                    >
                        <div
                            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-3 gap-y-12 sm:max-w-xl sm:grid-cols-10 sm:gap-x-3 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-6">
                        {
                            skills_logo.map((logo, index) => (

                                <img
                                    key={index}
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                    src={logo}
                                    alt="Skill Logo"
                                />

                            ))
                        }
                    </div>
                </div>
            </RevealOnScroll>
        </div>
    );
};

export default Skills;

import django from "../assets/djs.png";
import python from "../assets/python.png";
import aws from "../assets/as.png";
import react from "../assets/react.svg";
import fastapi from "../assets/fasts.svg";
import RevealOnScroll from './Reveal'
import docker from '../assets/docker.png'
const skills_logo = [python, django, fastapi, aws, react, docker];

const Skills = () => {
    return (
        <div id="skills" className="bg-gray-900 py-10 sm:py-10">
            <div className="mx-auto max-w-2xl mb-10 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-indigo-500 sm:text-4xl">Skills</h2>
            </div>

            <RevealOnScroll>

                <div className="mx-auto max-w-7xl px-6 lg:px-8">

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

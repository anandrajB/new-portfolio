import React from 'react'
import ProjectItem from './ProjectItem'
import krediq from '../assets/krediq.png'


const Projects = () => {
    return (
        <div id="project" className='max-w-full m-auto md:pl-20 py-16 bg-black'>
            <h1 className='text-4xl font-bold text-center text-white'>Projects</h1>
            <p className='text-center py-8 text-white'>This function takes the desired length of text as a parameter. It generates a random index into the array of lorem ipsum words, appends that word plus a space to the output string, and repeats until the string reaches the </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={krediq} title='krediq' />
                <ProjectItem img={krediq} title='kredibot' />
                <ProjectItem img={krediq} title='kredichat' />
                <ProjectItem img={krediq} title='kredifin' />
            </div>
        </div>

    )
}

export default Projects

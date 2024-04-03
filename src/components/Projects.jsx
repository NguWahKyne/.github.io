import React from 'react'
import ProjectItem from './ProjectItem'
import microfiImg from '../assets/img/microfiImg.jpeg'
import microfiImg2 from '../assets/img/microfiImg2.png'
import ecomImg from '../assets/img/ecomImg.png'
import twitchImg from '../assets/img/twitchImg.jpeg'


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'> Projects
        </h1>
        <p className='text-center py-8'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={microfiImg} title='MicroFinance KBZMS App'/>
            <ProjectItem img={microfiImg2} title='MicroFinance BNK App'/>
            <ProjectItem img={ecomImg} title='Mood Shopping App'/>
            <ProjectItem img={twitchImg} title='Twitch App'/>
        </div>
    </div>
  )
}

export default Projects
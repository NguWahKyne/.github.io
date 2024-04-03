import React from 'react'

const About = () => {
  return (
    <>
        <div id='about' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>
                    About
            </h1>
            <div className='grid grid-rows-2 grid-flow-col gap-4 m-auto p-3 mt-5'>
                <div className='row-span-3 m-5 '>
                    <p>I'm a Frontend UI Developer with over 3 years of experience and a strong passion for creating beautiful, user-friendly interfaces. With a background in HTML, CSS, JavaScript and various UI frameworks , I have honed my skills in crafting responsive web applications that are both visually stunning and intuitive to use.
                    My attention to detail and ability to think creatively. I love finding new ways to solve complex problems and am always striving to improve my skills and stay up-to-date with the latest industry trends.
                    </p>
                    <div className='btn-style'>
                        <a href="#_" className='relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-amber-950 border-2 border-amber-950 rounded-full hover:text-white group hover:bg-gray-50'>
                            <span className="absolute left-0 block w-full h-0 transition-all bg-amber-950 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative">Resume</span>
                        </a>
                    </div>   
                </div>
                <div className='col-span-2'> 

                <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a>

                </div>
                <div className='row-span-2 col-span-2'> 
                    <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </a>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default About
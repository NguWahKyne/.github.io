 
import React,{useState} from 'react'
import {AiOutlineMenu, AiOutlineHome ,AiOutlineProject ,AiOutlineMail} from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'
import {BsPerson} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import '../App.css'

const Sidenav = () => {
    const [nav,setNav]=useState(false);
  const handleNav= () => {
    setNav(!nav);
    //console.log('state changed')
  };

  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
        {
        nav ? (
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                <a href='#main'
                 className='w-[75%] flex justify-center items-center rounded-full shadow-lg side-color shadow-gray-400 m-2 p-3 cursor-pointer hover:scale-100 ease-in duration-200'  > 
                <AiOutlineHome size={15} />
                <span className='pl-4'> Home </span>
                </a>  
                <a href='#about'
                 className='w-[75%] flex justify-center items-center rounded-full shadow-lg side-color shadow-gray-400 m-2 p-3 cursor-pointer hover:scale-100 ease-in duration-200'  > 
                 <BsPerson size={15} />
                <span className='pl-4'>About </span>
                </a>  
                <a href='#work'
                 className='w-[75%] flex justify-center items-center rounded-full shadow-lg side-color shadow-gray-400 m-2 p-3 cursor-pointer hover:scale-100 ease-in duration-200'  >
                <GrProjects size={15} />
                <span className='pl-4'> Work </span>
                </a> 
                <a href='#service'
                 className='w-[75%] flex justify-center items-center rounded-full shadow-lg side-color shadow-gray-400 m-2 p-3 cursor-pointer hover:scale-100 ease-in duration-200'  > 
                <RiServiceLine size={15} />
                <span className='pl-4'> Service </span>
                </a>  
                <a href='#projects'
                 className='w-[75%] flex justify-center items-center rounded-full shadow-lg side-color shadow-gray-400 m-2 p-3 cursor-pointer hover:scale-100 ease-in duration-200'  > 
                <AiOutlineProject size={15} />
                <span className='pl-4'> Projects </span>
                </a> 
                  
                {/* <a href='#resume'
                 className='w-[75%] flex justify-center items-center rounded-full shadow-lg side-color shadow-gray-400 m-2 p-3 cursor-pointer hover:scale-100 ease-in duration-200'  > 
                <BsPerson size={15} />
                <span className='pl-4'> Resume </span>
                </a>   */}
                <a href='#contact'
                 className='w-[75%] flex justify-center items-center rounded-full shadow-lg side-color shadow-gray-400 m-2 p-3 cursor-pointer hover:scale-100 ease-in duration-200'  > 
                <AiOutlineMail size={15} />
                <span className='pl-4'> Contact</span>
                </a>  
             </div>
        )
        : ( '' )
    }
    <div className='md:block hidden fixed top-[25%] z-10 '>
        <div className='flex flex-col'>
            <a href="#main" className='rounded-full shadow-lg side-color shadow-gray-400 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineHome size={15}/>
            </a>
            <a href="#about" className='rounded-full shadow-lg side-color shadow-gray-400 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsPerson size={15}/>
            </a>
            <a href="#work" className='rounded-full shadow-lg side-color shadow-gray-400 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <GrProjects size={15}/>
            </a>
            <a href="#service" className='rounded-full shadow-lg side-color shadow-gray-400 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <RiServiceLine size={15}/>
            </a>
            <a href="#projects" className='rounded-full shadow-lg side-color shadow-gray-400 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineProject size={15}/>
            </a>
            
            {/* <a href="#resume" className='rounded-full shadow-lg side-color shadow-gray-400 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsPerson size={15}/>
            </a> */}
            {/* <a href="#contact" className='rounded-full shadow-lg side-color shadow-gray-400 m-2 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail size={15}/>
            </a> */}
        </div>
    </div>
    </div>
  )
}

export default Sidenav
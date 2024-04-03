import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaTwitter,FaFacebookF,FaInstagram,FaLinkedinIn} from 'react-icons/fa'
import bgPhoto from '../assets/img/bg-main.jpg';

const Main = () => {
  return (
    <div id="main" className='bg-white'>
        {/* <img className='w-full h-screen object-cover object-left scale-x-[-1]' src='https://images.pexels.com/photos/2825578/pexels-photo-2825578.jpeg?' />   */}
        <img src={bgPhoto} alt="bgPhoto" className='w-full h-screen object-cover object-center scale-x[-1]' />
        <div className='w-full h-screen absolute top-0 right-60'>
            <div className='max-w-[500px] m-auto w-full h-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-cream'> I'm Ngu Wah Khaing</h1>  
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-cream'> I'm a 
                    <TypeAnimation 
                    sequence={[
                        'Frontend Developer',
                        1000,
                        'Coder',
                        2000,
                        'Tech Enthusiast',
                        2000,
                        ()=>{
                            console.log('Done typing');
                        },
                    ]}
                    wrapper='div' 
                    cursor={true}
                    repeat={Infinity}
                    style={{fontSize:'1.5em', paddingLeft:'5px'}}
                    />
                </h2>  
            
            <div className='flex justify-between pt-10 max-w-[200px] w-full'>
                <FaTwitter className='cursorr-pointer iconcode' size={20}/>
                <FaFacebookF className='cursorr-pointer iconcode' size={20}/>
                <FaInstagram className='cursorr-pointer iconcode' size={20}/>
                <FaLinkedinIn className='cursorr-pointer iconcode' size={20}/>
            </div> 
            </div>   
         </div>  
    </div>
  )
}

export default Main
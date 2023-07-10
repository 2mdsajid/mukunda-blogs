import React from 'react'
import TypewriterC from '../reused/TypewriterC'
import Image from 'next/image'
import Link from 'next/link'
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import { BsArrowRight } from 'react-icons/bs'

const LandingPage = () => {
    return (

        <div className='w-full min-h-screen lg:pt-[14rem]  flex flex-col-reverse lg:flex-row items-center justify-center space-y-5 lg:space-y-0 lg:justify-between md:items-start'>
            <div className="w-full  lg:w-1/2 my-10 lg:my-0 lg:pr-10 md:pr-8 sm:pr-6">
                <h1 className='text-lg md:text-xl lg:text-3xl font-bold'>Hi, I am <span className='text-dark-accent font-bold tracking-wider'>Mukund</span></h1>
                {/* <p className='text-xl md:text-2xl lg:text-3xl'>I am <span className='text-xs'>not a</span></p> */}
                <div className='text-lg sm:text-xl md:text-3xl w-full font-bold my-1 lg:my-3'>
                    <div className='flex space-x-2 w-full'>
                        <TypewriterC texts={['DOCTOR.', 'WRITER.']} />
                    </div>
                </div>
                {/* about me */}
                <p className='text-md md:text-xl my-2 md:my-10'>I am a 2nd year medicl student at Manipal College of Medical Sciences, Pokhara. I like writing and Literature besides my MBBS. here on this website I will write my contents.</p>
                <div className='flex flex-row space-x-4 mt-4 md:mt-10'>
                    <Link href="/contact" className="p-2 border border-accent bg-dark-accent hover:bg-accent w-max rounded-lg font-semibold text-white ">
                        Connect With Me
                    </Link>

                    <Link href="#recentblogs" className="p-2 flex items-center justify-center w-max text-lg text-secondary dark:text-dark-secondary border border-accent rounded-lg font-semibold">
                        Read My Blogs
                        <span className="text-md lg:text-xl ml-2">
                            <BsArrowRight />
                        </span>
                    </Link>
                </div>



            </div>
            <div className="w-fit  lg:mb-20">
                <div className='w-[17rem] h-[17rem]  lg:w-[20rem] lg:h-[20rem] relative '>
                    <Image className='relative z-10 w-full h-full ' src={'/homepageimage.jpg'} alt='Intro Image' height={400} width={400} />
                    <div className='w-full h-full absolute top-3 right-3 z-0 bg-dark-accent'></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage




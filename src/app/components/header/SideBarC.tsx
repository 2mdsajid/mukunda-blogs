'use client'

import { SwipeableDrawer } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react'

import { FiUsers, FiBook, FiBriefcase, FiMail } from 'react-icons/fi';
import { AiOutlineMenu } from 'react-icons/ai';
import ThemeSwitcher from '@/utils/ThemeSwitcher';



const SideBarC = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isNavSelected, setIsNavSelected] = useState<string | undefined>('')

    const openNav = () => setIsNavOpen(true)
    const closeNav = () => setIsNavOpen(false)

    const setSelectedNav = (nav: string) => {
        setIsNavSelected(nav)
    }

    return (
        <div className='block sm:hidden'>
            <div className='flex space-x-2'>
                <ThemeSwitcher />
                <div className='text-black  dark:text-white text-4xl cursor-pointer' onClick={openNav}>
                    {isNavOpen ? (
                        <AiOutlineMenu className=" transition-transform duration-300 transform -rotate-45" />
                    ) : (
                        <AiOutlineMenu className=" transition-transform duration-300 transform " />
                    )}
                </div>
            </div>
            <div className=' border-red-600 lg:hidden '>
                <SwipeableDrawer
                    anchor="left"
                    open={isNavOpen}
                    onClose={closeNav}
                    onOpen={openNav}
                    className='lg:hidden'>
                    <div className='w-[75vw] sm:w-[65vw] md:w-[50vw] flex flex-col space-y-5 px-5 pt-20 text-xl  bg-white dark:bg-dark-primary h-full'>
                        <div className='flex flex-col space-y-2'>
                            <Link href='/friends' className='flex items-center text-black dark:text-white'>
                                <FiUsers className='mr-2' />
                                Medical Student
                            </Link>
                            <Link href='/blogs' className='flex items-center text-black dark:text-white'>
                                <FiBook className='mr-2' />
                                MBBS Life
                            </Link>
                            <Link href='/services' className='flex items-center text-black dark:text-white'>
                                <FiBriefcase className='mr-2' />
                                Lifestyles
                            </Link>
                            <Link href='/contact' className='flex items-center text-black dark:text-white'>
                                <FiMail className='mr-2' />
                                History Of Medicines
                            </Link>

                        </div>
                    </div>
                </SwipeableDrawer>
            </div>

        </div>
    )
}

export default SideBarC

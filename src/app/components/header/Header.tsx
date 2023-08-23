
import Link from 'next/link'
import React, { useState } from 'react'
import SideBarC from './SideBarC';
import ThemeSwitcher from '@/utils/ThemeSwitcher';
import Dropdown from './Dropdown';


import { MdOutlineTempleBuddhist, MdReviews } from 'react-icons/md';
import { RiEnglishInput } from 'react-icons/ri';
import { BsBook } from 'react-icons/bs';
import { TbSpeakerphone } from 'react-icons/tb';
import { PiHandsPrayingLight } from 'react-icons/pi';




export const dropdowns = [
  {
    link: '/politics',
    label: 'Politics',
    icon: <TbSpeakerphone />,
  },
  {
    link: '/philosophy',
    label: 'Philosophy',
    icon: <BsBook />,
  },
  {
    link: '/religion',
    label: 'Religion',
    icon: <PiHandsPrayingLight />,
  },
];

export const dropdowns2 = [
  {
    link: '/nepali',
    label: 'नेपाली',
    icon: <MdOutlineTempleBuddhist />,
  },
  {
    link: '/english',
    label: 'English',
    icon: <RiEnglishInput />,
  },
];


const Header = () => {
  return (
    <div className='w-full h-[4rem] fixed top-0 z-50 border-b bg-accent dark:bg-dark-primary  border-secondary dark:border-dark-accent '>
      <div className='w-full h-full absolute  flex items-center justify-between px-4 md:px-10 lg:px-20 xl:px-32 '>
        <div className='text-black dark:text-white font-bold tracking-wider'>
          <Link href='/'>MUKUNDA</Link>
        </div>

        {/* hidden in small devices */}
        <div className='space-x-3 text-sm lg:text-lg lg:space-x-4 hidden sm:flex items-center font-semibold'>
          <Link href='/mbbslife' className='navLink text-black dark:text-white'>MBBS Life</Link>
          <Dropdown parent='My Views' data={dropdowns} />
          <Dropdown parent='Literature'  data={dropdowns2} />
          <Link href='/research' className='navLink text-black dark:text-white'>Research</Link>
          <Link href='/foryou' className='navLink text-black dark:text-white'>For You</Link>
        </div>


        <div className='hidden sm:block  '>
          <ThemeSwitcher />
        </div>

        {/* visible in small devices ---client component */}
        <SideBarC />

      </div>
    </div>
  )
}

export default Header

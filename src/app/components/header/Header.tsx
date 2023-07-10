
import Link from 'next/link'
import React, { useState } from 'react'
import SideBarC from './SideBarC';
import ThemeSwitcher from '@/utils/ThemeSwitcher';

const Header = () => {
  return (
    <div className='w-full h-[4rem] fixed top-0 z-50 border-b bg-accent dark:bg-dark-primary  border-secondary dark:border-dark-accent '>
      <div className='w-full h-full absolute  flex items-center justify-between px-4 md:px-10 lg:px-20 xl:px-32 '>
        <div className='text-secondary dark:text-dark-secondary font-bold tracking-wider'>MUKUND</div>

        {/* hidden in small devices */}
        <div className='space-x-4 hidden sm:block lg:text-xl font-semibold'>
          <Link href='/friends' className='navLink text-secondary dark:text-dark-secondary'>Medical Student</Link>
          <Link href='/blogs' className='navLink text-secondary dark:text-dark-secondary'>MBBS Life</Link>
          <Link href='/services' className='navLink text-secondary dark:text-dark-secondary'>Lifestyles</Link>
          <Link href='/contact' className='navLink text-secondary dark:text-dark-secondary'>History Of Medicines</Link>
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

'use client'

import Link from 'next/link';
import React, { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md';

type TypeDropDownProps = {
    link: string;
    label: string
    icon: React.ReactNode;
}

const Dropdown = ({ data, parent, parenticon }: { data: TypeDropDownProps[], parent: string, parenticon?:React.ReactNode }) => {
    const [isDropdownShown, setIsDropdownShown] = useState(false)
    return (
        <div
            onMouseOver={() => setIsDropdownShown(true)}
            onMouseOut={() => setIsDropdownShown(false)}
            onClick={() => setIsDropdownShown(!isDropdownShown)}
            className='w-max h-fit relative '>
            <div className='flex items-center sm:justify-center text-black dark:text-white' >
                <p className='cursor-pointer flex items-center'>
                    <span className='sm:hidden mr-2'>{parenticon}</span>
                    {parent}
                    </p>
                <button className={`${isDropdownShown ? 'rotate-180' : 'rotate-0'} text-2xl`} ><MdKeyboardArrowDown /></button>
            </div>
            {isDropdownShown && <div className='sm:absolute w-max  rounded flex flex-col gap-2 bg-accent dark:bg-dark-primary dark:sm:border'>
                <div className='flex flex-col gap-2  sm:border w-full pl-[2rem] sm:pl-4 p-4 border-secondary dark:border-dark-accent'>
                    {data.map((d, i) => {
                        return <Link key={i} href={d.link} className='navLink text-black dark:text-white flex items-center'>
                            <span className='sm:hidden mr-2'>{d.icon}</span>
                            {d.label}
                            </Link>
                    })}
                </div>
            </div>}
        </div>
    )
}

export default Dropdown

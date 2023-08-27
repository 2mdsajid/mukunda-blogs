import React from 'react'
import Header from '../header/Header'

const KeyLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-screen min-h-screen  bg-primary text-black dark:bg-dark-primary dark:text-white pt-20'>
            <Header />
            <div className='w-full pb-10 px-4 md:px-10 lg:px-20 xl:px-32 my-20 '>
                {children}
            </div>
        </div>
    )
}

export default KeyLayout

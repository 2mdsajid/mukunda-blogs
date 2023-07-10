import React from 'react'
import Header from '../header/Header'

const KeyLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-screen min-h-screen  bg-primary text-black dark:bg-dark-primary dark:text-white pt-20'>
            <Header />
            <div className='w-full pb-10'>
                {children}
            </div>
        </div>
    )
}

export default KeyLayout

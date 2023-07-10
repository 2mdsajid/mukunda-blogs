import React from 'react'
import MainCard from './MainCard'
import Link from 'next/link'


const AllBlogs = () => {
    const array = [1, 2, 3, 4, 5, 6]
    return (
        <div className='max-w-full h-max my-10'>
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 py-4`}>
                {array.map((note, index) => {
                    return <div key={index} className={` my-5 m-2 border dark:border-black rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transform hover:scale-110 transition duration-300 ease-in-out`}>
                        <MainCard />
                    </div>
                })}
            </div>
            <button className='w-max font-semibold rounded-md  transform hover:scale-110 transition duration-300 ease-in-out'>
                <Link href={'/allblogs'} className='px-4 py-2 ml-5 rounded-md border w-full border-dark-accent '>More Blogs...</Link>
            </button>
        </div>
    )
}

export default AllBlogs

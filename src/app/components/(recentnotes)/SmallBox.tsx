import { dummyBlog } from '@/utils/data'
import React from 'react'
import Image from 'next/image'

const SmallBox = () => {
    const data = dummyBlog
    return (
        <div className='w-full flex flex-col lg:flex-row border dark:border-black rounded-l-md shadow-lg cursor-pointer hover:shadow-lg transform hover:scale-110 transition duration-300 ease-in-out'>
            <Image className='w-full lg:w-[12rem] xl:w-[15rem] rounded-l-md' width={200} height={100} alt={data.intro} src={data.introimage} />
            <div className='lg:ml-2 p-1 px-2'>
                <p className='flex space-x-4'><span>{data.author}</span><span>|</span><span>{data.readtime} read</span></p>
                <h1 className='text-md lg:text-lg xl:text-xl font-semibold my-1'>{data.title}</h1>
                {data.date && (
                    <p className=" text-secondary dark:text-dark-secondary text-sm">
                        {new Date(data.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                )}
                <button className='px-3 py-1 my-3  w-max bg-dark-accent rounded-lg hover:bg-accent text-primary'>Read</button>
            </div>
        </div>
    )
}

export default SmallBox

import { dummyBlog } from '@/utils/data'
import Image from 'next/image'
import React from 'react'
import BlogReadButton from '../reused/BlogReadButton'

const MainCard = () => {
    const data = dummyBlog
    return (
        <div>
            <Image className='w-full rounded-t-md' width={200} height={100} alt={data.intro} src={data.introimage} />
            <div className='px-3'>
                <p className='flex space-x-5 text-sm font-semibold my-2'><span>{data.author}</span><span>|</span><span>{data.readtime} read</span></p>
                <h1 className='w-full font-semibold text-md md:text-lg lg:text-xl xl:text-2xl'>{data.title}</h1>
                <p className='my-2 text-sm '>{data.intro}</p>
                {data.date && (
                    <p className="text-sm text-secondary dark:text-dark-secondary">
                        {new Date(data.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                )}
<BlogReadButton id={data.noteid} />
            </div>
        </div>
    )
}

export default MainCard

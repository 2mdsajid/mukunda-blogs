import React from 'react'
import PageIntro from '../components/reused/PageIntro'
import KeyLayout from '../components/reused/KeyLayout'
import { RiSuitcase3Fill } from 'react-icons/ri'
import SingleBlogSkeleton from '../components/reused/SingleBlogSkeleton'
import { BsBook } from 'react-icons/bs'

const page = async () => {

    return (
        <KeyLayout>
            <div className='w-full h-full '>
                <PageIntro title='Views | Philosophy' icon={<><BsBook /></>} pageintro='This is where I will share all my views on philosophy' />
            </div>
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 py-4`}>
                <div className={` my-5 m-2 dark:border-black rounded-lg overflow-hidden shadow-md cursor-pointer `}>
                    <SingleBlogSkeleton />
                </div>
            </div>
        </KeyLayout>
    )
}

export default page

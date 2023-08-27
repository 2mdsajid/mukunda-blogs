import React from 'react'
import Header from '../components/header/Header'
import KeyLayout from '../components/reused/KeyLayout'
import BlogCategoryButton from './BlogCategoryButton'
const data = [
    {
        label: 'MBBS Life',
        link: '/mbbslife'
    },
    {
        label: 'Political Views',
        link: '/politics'
    },
    {
        label: 'Religious Views',
        link: '/religion'
    },
    {
        label: 'Nepali Literatures',
        link: '/nepali'
    },
    {
        label: 'English Literatures',
        link: '/english'
    }
]

const AllBlogs = () => {
    return (
        <KeyLayout>
            <div className='max-w flex flex-col justify-center items-center '>
                <h1 className='font-bold my-2 text-3xl'>Please Select a Category</h1>
                <div className='my-5 w-10 h-[2px] bg-secondary dark:bg-dark-secondary'></div>
            </div>
            <div className='w-full md:w-[75%] lg:w-[40%] mx-auto flex flex-wrap gap-4 justify-center'>
                {data.map((item, index) => {
                    return <BlogCategoryButton key={index} label={item.label} link={item.link} />
                })}
            </div>
        </KeyLayout>
    )
}

export default AllBlogs

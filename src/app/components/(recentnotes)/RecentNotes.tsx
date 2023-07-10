import React from 'react'
import LargeBox from './LargeBox'
import SmallBox from './SmallBox'

const RecentNotes = async () => {
    // const res = await fetch('https://blogwithkafle.adaptable.app/getrecentnotes')
    // const data = await res.json()
    // console.log("🚀 ~ file: RecentNotes.tsx:6 ~ RecentNotes ~ data:", data)

    return (
        <div className='w-full h-full my-10 flex flex-col lg:flex-row lg:space-x-5 items-start'>
            <div className='w-full lg:w-1/2 '>
                <LargeBox />
            </div>
            <div className='w-full lg:w-1/2 flex flex-col space-y-5 md:space-y-0 md:flex-row lg:flex-col lg:space-y-10 justify-between lg:justify-start'>
                <div className='w-full sm:w-[90%] mx-auto md:w-[30%] lg:w-full'>
                    <SmallBox />
                </div>
                <div className='w-full sm:w-[90%] mx-auto  md:w-[30%] lg:w-full'>
                    <SmallBox />
                </div>
                <div className=' w-full sm:w-[90%] mx-auto md:w-[30%] lg:w-full'>
                    <SmallBox />
                </div>
            </div>
        </div>
    )
}

export default RecentNotes

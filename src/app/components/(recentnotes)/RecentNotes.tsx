import React from 'react'
import LargeBox from './LargeBox'
import SmallBox from './SmallBox'
import { mongoNote } from '@/utils/types'

type TypeRecentNotesProps = {
    notes: mongoNote[]
}

const RecentNotes = async (props: TypeRecentNotesProps) => {

    const notes = props.notes

    return (
        <div className='w-full h-full my-10 flex flex-col lg:flex-row lg:space-x-5 items-start'>
            <div className='w-full lg:w-1/2 '>
                <LargeBox data={notes[0]} />
            </div>
            <div className='w-full lg:w-1/2 flex flex-col space-y-5 md:space-y-0 md:flex-row lg:flex-col lg:space-y-10 justify-between lg:justify-start'>
                {notes.map((note, index) => {
                    return <div key={index} className='w-full sm:w-[90%] mx-auto md:w-[30%] lg:w-full'>
                        <SmallBox data={note} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default RecentNotes

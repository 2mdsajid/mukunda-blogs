'use client'


import { TransformedNote, TypeDashContents } from '@/utils/types';
import router from 'next/router';
import React from 'react'
import VisitorsViews from './VisitorsViews';
import AdminCards from './AdminCards';
import { useRouter } from 'next/navigation';
import Link from 'next/link';



const DashContents = ({ activeButton, published, drafts, viewssum, highestViewNote }: TypeDashContents) => {
    const router = useRouter()
    // route to edit note
    function handleEdit(id: string): void {
        router.push(`blog_lekhne/?hexid=${id}`)
    }

    return (
        <div className='w-full h-full overflow-auto'>
            {activeButton === "published" && (
                <div className='px-4 sm:px-0 pt-5 md:pl-5 overflow-auto'>
                    <button
                        className="my-5 ml-3 bg-green-500 py-2 px-4 text-white hover:bg-green-700 font-bold border rounded-lg"
                        onClick={() => {
                            window.open('/blog_lekhne', '_blank');
                        }}>
                        Add Note
                    </button>
                    <div className=' flex flex-wrap justify-start gap-4 '>
                        {published.map((note) => (
                            <div key={note._id} className='w-[95%] md:w-[45%] lg:w-[30%] xl:w-[23%] mx-auto'>
                                <AdminCards note={note} handleEdit={handleEdit} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {activeButton === "drafts" && (
                <div className=' flex flex-wrap justify-start gap-4 px-4 sm:px-0 pt-5 md:pl-5 overflow-auto'>
                    {drafts.map((note) => (
                        <div key={note._id} className='w-[95%] md:w-[45%] lg:w-[30%] xl:w-[23%] mx-auto'>
                            <AdminCards note={note} handleEdit={handleEdit} />
                        </div>
                    ))}
                </div>
            )}


            {/* visitors */}
            {activeButton === "visitors" && (
                <VisitorsViews viewssum={viewssum} highestViewNote={highestViewNote} />
            )}

        </div>
    )
}

export default DashContents

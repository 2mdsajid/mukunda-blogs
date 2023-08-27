'use client'

import React, { FormEvent, useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import Image from 'next/image';
import { BACKEND, FRONTEND } from '@/utils/data';
import { SingleNoteProps, TypeComment } from '@/utils/types';
import { ParsedElement, setUniqueUserId } from '@/utils/functions';

import LikesComponent from './LikesComponent';
import CommentsDisplay from './CommentsDisplay';
import SocialMediaShare from './SocialMediaShare';

const SingleNote = ({ note }: SingleNoteProps) => {
    const [uniqueid,setUniqueid] = useState('')
    const blogurl = encodeURIComponent(FRONTEND + '/' + note.noteid)

    const AddViews = async () => {
        const uniqueid = await setUniqueUserId()
        console.log("🚀 ~ file: SingleBlog.tsx:20 ~ AddViews ~ uniqueid:", uniqueid)
        setUniqueid(uniqueid)

        const isAdminCookie = Cookies.get('isAdmin');
        if (isAdminCookie) {
            return
        }
        
        const res = await fetch(BACKEND + '/addviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: note._id,
            }),
        });
     
    }

    useEffect(() => {
        AddViews()
    }, [])


    return (
        <div>
            <div key={note._id} className="singlenote px-6 text-secondary dark:text-dark-secondary ">
                <div className="md:my-6">
                    <p className='text-dark-accent text-xs uppercase font-semibold'>{note.category}</p>
                    <h1 className=" text-3xl md:text-4xl font-bold mb-6">{note.title}</h1>
                    <div className='flex flex-col md:flex-row md:space-x-12'>
                        <div className='text-sm md:text-lg mb-3'>
                            <p className=" font-bold mb-1">{note.author}</p>
                            {note.date && (
                                <p className="font-medium text-gray-700 dark:text-gray-500">
                                    {new Date(note.date).toLocaleString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                        hour: 'numeric',
                                        minute: 'numeric',
                                    })}
                                </p>
                            )}
                        </div>

                        {/* <div className="flex flex-col text-sm md:text-lg ">
                            <p className="font-semibold ">Keywords:</p>
                            <p className='font-medium flex flex-wrap text-gray-700 dark:text-gray-500 '>
                                {keywords.map((keyword, index) => (
                                    <p key={index}>{keyword},&nbsp;</p>
                                ))}
                            </p>
                        </div> */}
                    </div>
                    <div className='w-full md:hidden mx-auto my-3 lg:my-5 drop-shadow-sm'>
                        <Image width={400} height={200} alt='Intro Image' src={note.introimage} className='shadow-md' />
                    </div>
                    <div className="border-t border-gray-600 dark:border-gray-300 mt-6 py-6">
                        <div className=" text-lg leading-7 formdata-content-class">
                            {ParsedElement(note.content)}
                        </div>
                    </div>
                </div>

                <div className="flex justify-between">
                    {uniqueid && <LikesComponent upvote={note.upvote} id={note._id} uniqueid={uniqueid} />}
                    <SocialMediaShare blogurl={blogurl} title={note.title} />
                </div>

                <div className="flex items-center flex-col w-full justify-between my-10">
                    {uniqueid  && <CommentsDisplay isadmin={false} notecomments={note.comments} uniqueid={uniqueid} id={note._id} />}
                </div>

            </div>
            <div>
                {/* notes recommendations */}
            </div>
        </div>
    )
}

export default SingleNote
'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const BlogReadButton = ({id}:{id:string}) => {

    const router = useRouter()

    const navigateToSingleBlog = () =>{
        router.push(`/${id}`)
    }

  return (
    <button onClick={navigateToSingleBlog} className='px-3 py-1 mt-5  mb-3 text-lg rounded-lg bg-dark-accent hover:bg-accent shadow-md font-semibold text-primary'>Read</button>
  )
}

export default BlogReadButton

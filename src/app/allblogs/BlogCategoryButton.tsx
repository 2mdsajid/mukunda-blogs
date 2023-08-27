import Link from 'next/link'
import React from 'react'

export type TypeBlogCategoryButtonProps = {
    label: string
    link: string
}

const BlogCategoryButton = (props: TypeBlogCategoryButtonProps) => {
    const { label, link } = props
    return (
        <div className='relative w-fit border border-black shadow-sm rounded-md hover:bg-blue-200 hover:text-black'>
            <Link className='h-full w-max p-4 flex space-x-1 items-center font-bold cursor-pointer ' href={link}>
                {label}
            </Link>
        </div>
    )
}

export default BlogCategoryButton

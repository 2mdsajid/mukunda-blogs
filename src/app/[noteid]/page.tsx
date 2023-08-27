
import React from 'react'
import { TypeParamProps, mongoNote } from '@/utils/types';
import { BACKEND, dummyBlogData, dummyBlogs } from '@/utils/data';
import KeyLayout from '../components/reused/KeyLayout';
import SingleBlog from './components/SingleBlog';
import SingleNoteViewSkeleton from './components/SingleNoteViewSkeleton';

// const fetchData = async (noteid: string)=> {
//     const blog = dummyBlogs.filter(blog => {
//         return blog.noteid === noteid
//     })
//     // Wait for 5 seconds using setTimeout
    // await new Promise(resolve => setTimeout(resolve, 5000));
//     return dummyBlogs[0]
// }

export const metadata = {
    title: 'Mukunda | Politics Views',
    openGraph: {
        title: 'Mukunda | Politics Views',
        description: 'Views of Mukunda on politics',
    },
}

async function fetchData(noteid: string) {
    const response = await fetch(`${BACKEND}/getnotebynoteid/${noteid}`, { cache: 'no-store' });
    if (!response.ok) {
        return console.error(response)
    }
    const data = await response.json();
    return data.note;
}

const page = async (props: TypeParamProps) => {
    const noteid = props.params.noteid
    const blog = await fetchData(noteid)

    return (
        <KeyLayout>
            {blog ? (
                <div className='px-4 md:px-10 lg:px-20 xl:px-32'>
                    <SingleBlog note={blog} />
                </div>
            ) : (
                <p>Cant find a blog</p>
            )}
        </KeyLayout>
    )
}

export default page


import React from 'react'
// import SingleBlog from './components/SingleBlog';

import SingleBlog from './components/SingleBlog';

import { TypeParamProps } from '@/utils/types';
import { dummyBlogData, dummyBlogs } from '@/utils/data';
import KeyLayout from '../components/reused/KeyLayout';
import AddViewsAndUserid from './components/AddViewsAndUserid';

const BACKEND = ''

async function fetchData(noteid: string) {
    const blog = dummyBlogs.filter(blog => blog.noteid === noteid)
    return blog
}

// async function fetchData(level: string) {
//   const response = await fetch(BACKEND + `/getsingleblog/${level}`, { next: { revalidate: 0 } });
//   const data = await response.json();
//   return data.data;
// }



const page = async (props: TypeParamProps) => {
    const noteid = props.params.noteid
    const note = dummyBlogData.find(blog => blog.noteid === noteid);
    return (
        <KeyLayout>
            {/* <AddViewsAndUserid /> */}
            {note ? (
                <div className='px-4 md:px-10 lg:px-20 xl:px-32'>
                    <SingleBlog note={note} />
                </div>
            ) : (
                <p>Loading blog...</p>
            )}
        </KeyLayout>
    )
}

export default page

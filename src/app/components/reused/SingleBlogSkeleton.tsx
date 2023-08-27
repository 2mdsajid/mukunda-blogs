import React from 'react'
import ReusableSkeleton from './Skeleton'

const SingleBlogSkeleton = () => {
  return (
    <div className='w-100 flex items-center flex-col py-3'>
      <ReusableSkeleton variant='rectangular' height={250} width="90%" />
      <ReusableSkeleton variant='text' height={50} width="90%" />
      <ReusableSkeleton variant='rectangular' height={100} width="90%" />
    </div>
  )
}

export default SingleBlogSkeleton

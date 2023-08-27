import { TypePageIntro } from '@/utils/types'
import React from 'react'

const PageIntro = ({ title, icon, pageintro }: TypePageIntro) => {
  return (
    <div className='max-w flex flex-col justify-center items-center '>
      <div className='text-5xl'>{icon}</div>
      <h1 className='font-bold my-2 text-3xl'>{title}</h1>
      <p className='w-[90%] mx-auto text-center'>{pageintro}</p>
      <div className='my-5 w-10 h-[2px] bg-secondary dark:bg-dark-secondary'></div>
    </div>
  )
}

export default PageIntro

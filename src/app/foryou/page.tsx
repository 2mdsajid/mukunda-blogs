import React from 'react'
import PageIntro from '../components/reused/PageIntro'
import KeyLayout from '../components/reused/KeyLayout'
import { AiOutlineGift } from 'react-icons/ai'

export const metadata = {
    title: 'Mukunda | For You ',
    openGraph: {
      title: 'Mukunda | For You ',
      description: 'For you from mukunda',
    },
  }

const page = () => {
    return (
        <KeyLayout>
            <div className='w-full h-full '>
                <PageIntro title='For You' icon={<><AiOutlineGift /></>} pageintro='This is where I will share all my researches' />
            </div>
        </KeyLayout>
    )
}

export default page

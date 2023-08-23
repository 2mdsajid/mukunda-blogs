import React from 'react'
import PageIntro from '../components/reused/PageIntro'
import KeyLayout from '../components/reused/KeyLayout'
import { BsBook } from 'react-icons/bs'

export const metadata = {
    title: 'Mukunda | Philosophy Views',
    openGraph: {
      title: 'Mukunda | Philosophy Views',
      description: 'Views of Mukunda on philosophy',
    },
  }

const page = () => {
    return (
        <KeyLayout>
            <div className='w-full h-full '>
                <PageIntro title='Views | Philosophy' icon={<><BsBook /></>} pageintro='This is where I will share all my views on philosophy' />
            </div>
        </KeyLayout>
    )
}

export default page

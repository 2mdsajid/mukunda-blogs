import React from 'react'
import PageIntro from '../components/reused/PageIntro'
import KeyLayout from '../components/reused/KeyLayout'
import { RiSuitcase3Fill } from 'react-icons/ri'

export const metadata = {
    title: 'Mukunda | Medical Student',
    openGraph: {
      title: 'Mukunda | Medical Student',
      description: 'Medical Student of Mukunda',
    },
  }

const page = () => {
    return (
        <KeyLayout>
            <div className='w-full h-full '>
                <PageIntro title='Medical Student' icon={<><RiSuitcase3Fill /></>} pageintro='This is where I will share all my MBBS Journey' />
            </div>
        </KeyLayout>
    )
}

export default page

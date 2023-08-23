import React from 'react'
import PageIntro from '../components/reused/PageIntro'
import KeyLayout from '../components/reused/KeyLayout'
import { PiHandsPrayingLight } from 'react-icons/pi'
import { FiBriefcase } from 'react-icons/fi'

export const metadata = {
    title: 'Mukunda | Research ',
    openGraph: {
      title: 'Mukunda | Research ',
      description: 'Researches done by mukunda',
    },
  }

const page = () => {
    return (
        <KeyLayout>
            <div className='w-full h-full '>
                <PageIntro title='Research' icon={<><FiBriefcase /></>} pageintro='This is where I will share all my researches' />
            </div>
        </KeyLayout>
    )
}

export default page

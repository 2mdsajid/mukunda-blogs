import React from 'react'
import PageIntro from '../components/reused/PageIntro'
import KeyLayout from '../components/reused/KeyLayout'
import { RiEnglishInput, RiSuitcase3Fill } from 'react-icons/ri'

export const metadata = {
    title: 'Mukunda | English Literature',
    openGraph: {
      title: 'Mukunda | English Literature',
      description: 'English Literature of Mukunda',
    },
  }

const page = () => {
    return (
        <KeyLayout>
            <div className='w-full h-full '>
                <PageIntro title='English Literature' icon={<><RiEnglishInput /></>} pageintro='This is where I will share all English Literature' />
            </div>
        </KeyLayout>
    )
}

export default page

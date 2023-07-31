import React from 'react'
import PageIntro from '../components/reused/PageIntro'
import KeyLayout from '../components/reused/KeyLayout'
import { RiSuitcase3Fill } from 'react-icons/ri'

export const metadata = {
    title: 'Mukunda | History-Of_medicine',
    openGraph: {
      title: 'Mukunda | History-Of_medicine',
      description: 'History of medicine of Mukunda',
    },
  }

const page = () => {
    return (
        <KeyLayout>
            <div className='w-full h-full '>
                <PageIntro title='History Of Medicine' icon={<><RiSuitcase3Fill /></>} pageintro='This is where I will share all my MBBS life' />
            </div>
        </KeyLayout>
    )
}

export default page

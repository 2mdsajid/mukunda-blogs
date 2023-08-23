import React from 'react'
import PageIntro from '../components/reused/PageIntro'
import KeyLayout from '../components/reused/KeyLayout'
import { RiSuitcase3Fill } from 'react-icons/ri'

export const metadata = {
    title: 'Mukunda | Nepali Literature',
    openGraph: {
      title: 'Mukunda | Nepali Literature',
      description: 'Nepali Literature of Mukunda',
    },
  }

const page = () => {
    return (
        <KeyLayout>
            <div className='w-full h-full '>
                <PageIntro title='Nepali Literature' icon={<><RiSuitcase3Fill /></>} pageintro='This is where I will share all Nepali Literature' />
            </div>
        </KeyLayout>
    )
}

export default page

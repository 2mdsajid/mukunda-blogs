import React from 'react'
import PageIntro from '../components/reused/PageIntro'
import KeyLayout from '../components/reused/KeyLayout'
import { RiSuitcase3Fill } from 'react-icons/ri'
import { TbSpeakerphone } from 'react-icons/tb'

export const metadata = {
    title: 'Mukunda | Politics Views',
    openGraph: {
      title: 'Mukunda | Politics Views',
      description: 'Views of Mukunda on politics',
    },
  }

const page = () => {
    return (
        <KeyLayout>
            <div className='w-full h-full '>
                <PageIntro title='Views | Politics' icon={<><TbSpeakerphone /></>} pageintro='This is where I will share all my views on politics' />
            </div>
        </KeyLayout>
    )
}

export default page

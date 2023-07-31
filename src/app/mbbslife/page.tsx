import React from 'react'
import PageIntro from '../components/reused/PageIntro'
import KeyLayout from '../components/reused/KeyLayout'
import { RiSuitcase3Fill } from 'react-icons/ri'

export const metadata = {
    title: 'Mukunda | Mbbs-Life',
    openGraph: {
      title: 'Mukunda | Mbbs-Life',
      description: 'Mbbs Life of Mukunda',
    },
  }

const page = () => {
    return (
        <KeyLayout>
            <div className='w-full h-full '>
                <PageIntro title='MBBS Life' icon={<><RiSuitcase3Fill /></>} pageintro='This is where I will share all my MBBS life' />
            </div>
        </KeyLayout>
    )
}

export default page

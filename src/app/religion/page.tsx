import React from 'react'
import PageIntro from '../components/reused/PageIntro'
import KeyLayout from '../components/reused/KeyLayout'
import { PiHandsPrayingLight } from 'react-icons/pi'

export const metadata = {
    title: 'Mukunda | Religion Views',
    openGraph: {
      title: 'Mukunda | Religion Views',
      description: 'Views of Mukunda on religion',
    },
  }

const page = () => {
    return (
        <KeyLayout>
            <div className='w-full h-full '>
                <PageIntro title='Views | Religion' icon={<><PiHandsPrayingLight /></>} pageintro='This is where I will share all my views on religion' />
            </div>
        </KeyLayout>
    )
}

export default page

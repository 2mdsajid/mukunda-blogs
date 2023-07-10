import React from 'react'
import PageIntro from '../components/reused/PageIntro'
import KeyLayout from '../components/reused/KeyLayout'
import { RiSuitcase3Fill } from 'react-icons/ri'

const page = () => {
    return (
        <KeyLayout>
            <div className='w-full h-full '>
                <PageIntro title='Lifestyle' icon={<><RiSuitcase3Fill /></>} pageintro='This is where I will share all my life srtyles' />
            </div>
        </KeyLayout>
    )
}

export default page

import React from 'react'
import PageIntro from '../components/reused/PageIntro'
import KeyLayout from '../components/reused/KeyLayout'
import { RiSuitcase3Fill } from 'react-icons/ri'
import { BACKEND } from '@/utils/data'
import { mongoNote } from '@/utils/types'
import MainCard from '../components/(allblogs)/MainCard'
import NoBlogText from '../components/reused/NoBlogText'

export const metadata = {
    title: 'Mukunda | Mbbs-Life',
    openGraph: {
      title: 'Mukunda | Mbbs-Life',
      description: 'Mbbs Life of Mukunda',
    },
  }

  const fetchNotesByCategory = async () => {
    const res = await fetch(`${BACKEND}/getnotesbycategory/mbbslife`, { cache: 'no-store' })
    const data = await res.json()
    if (!res.ok) {
        return null
    }
    return data.notes as mongoNote[]
}

const page = async () => {
    const notes = await fetchNotesByCategory()
    return (
        <KeyLayout>
            <div className='w-full h-full '>
                <PageIntro title='MBBS Life' icon={<><RiSuitcase3Fill /></>} pageintro='This is where I will share all my MBBS life' />
            </div>
            {notes ? <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 py-4`}>
                {notes?.map((note, index) => {
                    return <div key={index} className={` my-5 m-2 border dark:border-black rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out`}>
                        <MainCard data={note} />
                    </div>
                })}
            </div> : <NoBlogText />
            }
        </KeyLayout>
    )
}

export default page

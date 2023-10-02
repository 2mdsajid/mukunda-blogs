import Image from 'next/image'
import Header from './components/header/Header'
import LandingPage from './components/(landing)/LandingPage'
import SectionTitle from './components/reused/SectionTitle'
import RecentNotes from './components/(recentnotes)/RecentNotes'
import AllBlogs from './components/(allblogs)/AllBlogs'
import Footer from './components/footer/Footer'
import { BACKEND } from '@/utils/data'
import { mongoNote } from '@/utils/types'
import Timer from './components/reused/Timer'
import TimerComponent from './components/reused/TimerComponent'

const fetchRecentNotes = async () => {
  const res = await fetch(`${BACKEND}/getrecentnotes`)
  const data = await res.json()
  return data.notes as mongoNote[]
}

const fetchAllNotes = async () => {
  const res = await fetch(`${BACKEND}/getallnotes`)
  const data = await res.json()
  return data.notes as mongoNote[]
}

export default async function Home() {
  const notes = await fetchRecentNotes()
  const allnotes = await fetchAllNotes()

  return (
    <div className='w-screen  bg-primary text-black dark:bg-dark-primary dark:text-white'>
      <Header />
{/*       <TimerComponent /> */}
      <div className='w-full  pt-20 '>

        <section className='h-[80vh] px-4 md:px-10 lg:px-20 xl:px-32 mt-5 flex items-center justify-center'>
          <LandingPage />
        </section>

        <section id='recentblogs' className='min-h-screen pt-20 px-4 md:px-10 lg:px-20 xl:px-32 my-20'>
          <SectionTitle title='Recent Blogs' />
          <div className='w-full'>
            <RecentNotes notes={notes} />
          </div>
        </section>

        <section id='all blogs' className='min-h-screen pt-20 px-4 md:px-10 lg:px-20 xl:px-32 my-20'>
          <SectionTitle title='All Blogs' />
          <div className='w-full'>
            <AllBlogs notes={allnotes} />
          </div>
        </section>

        <Footer />

      </div>
    </div>
  )
}

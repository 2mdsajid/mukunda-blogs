import Image from 'next/image'
import Header from './components/header/Header'
import LandingPage from './components/(landing)/LandingPage'
import SectionTitle from './components/reused/SectionTitle'
import RecentNotes from './components/(recentnotes)/RecentNotes'
import AllBlogs from './components/(allblogs)/AllBlogs'
import Footer from './components/footer/Footer'

// https://blogwithkafle.adaptable.app/getrecentnotes



export default function Home() {
  return (
    <div className='w-screen  bg-primary text-black dark:bg-dark-primary dark:text-white'>
      <Header />
      <div className='w-full  pt-20 '>

        <section className='h-[80vh] px-4 md:px-10 lg:px-20 xl:px-32 mt-5 flex items-center justify-center'>
          <LandingPage />
        </section>

        <section id='recentblogs' className='min-h-screen pt-20 px-4 md:px-10 lg:px-20 xl:px-32 my-20'>
          <SectionTitle title='Recent Blogs' />
          <div className='w-full'>
            <RecentNotes />
          </div>
        </section>

        <section id='all blogs' className='min-h-screen pt-20 px-4 md:px-10 lg:px-20 xl:px-32 my-20'>
          <SectionTitle title='All Blogs' />
          <div className='w-full'>
            <AllBlogs />
          </div>
        </section>

          <Footer />

      </div>
    </div>
  )
}

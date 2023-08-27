import React from 'react'
import PageIntro from '../components/reused/PageIntro'
import KeyLayout from '../components/reused/KeyLayout'
import { ImQuotesLeft } from 'react-icons/im';

export const metadata = {
  title: 'Mukunda | About ',
  openGraph: {
    title: 'Mukunda | About ',
    description: 'About mukunda',
  },
}

const page = () => {
  return (
    <KeyLayout>
      <div className="w-full ">
        <div className={`flex flex-col items-center mb-4`}>
          <ImQuotesLeft className={`text-4xl mr-2`} />
          <blockquote className={`quote text-2xl italic text-center`}>
          I&apos;m not lazy; I&apos;m just on energy-saving mode<span>🥱</span>.
          </blockquote>
          <p className={`text-lg my-5`}>
            <span className={`divider text-gray-900 dark:text-gray-500`}>I&apos;m Mukund</span>
          </p>
        </div>
      </div>
    </KeyLayout>
  )
}

export default page

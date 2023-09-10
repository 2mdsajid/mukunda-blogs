import './globals.css'
import ThemeWrapper from '../libs/ThemeWrapper'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Mukunda | Medical Student</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio Website of Mukunda, a 2nd-year MBBS student at Manipal College of Medical Sciences, Pokhara." />
        <meta name="keywords" content="Mukunda, MBBS student, Manipal College of Medical Sciences, Pokhara, writing, remote village" />
        <meta name="og:title" content="Mukunda | Medical Student" />
        <meta name="og:description" content="Portfolio Website of Mukunda, a 2nd-year MBBS student at Manipal College of Medical Sciences, Pokhara." />
        <meta name="og:image" content="/mukunda-profile.jpg" />
        <link rel="icon" href="/mukunda-favicon.ico" type="image/x-icon" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/mukunda-favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/mukunda-favicon-16x16.png" />
        <link rel="icon" type="image/svg+xml" href="/mukunda-favicon.svg" />
      </head>
      <body>
        <ThemeWrapper>
          {/* {children} */}
          <div className='w-screen h-screen flex items-center justify-center'>

          <img src="/meme.jpg" alt="meme" className='w-[90%] sm:w-[70%] md:w-[65%] lg:w-[55%] xl:w-[50%] mx-auto' />
          </div>
        </ThemeWrapper>
      </body>
    </html>
  )
}

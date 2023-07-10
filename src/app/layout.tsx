import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeWrapper from '../libs/ThemeWrapper'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <ThemeWrapper>
          {children}
        </ThemeWrapper>
        </body>
    </html>
  )
}

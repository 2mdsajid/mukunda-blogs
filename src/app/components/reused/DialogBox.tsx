import React from 'react'

const DialogBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='fixed  bottom-0 left-0 h-screen w-screen z-50  '>
        <div className='w-full h-full absolute backdrop-blur-sm '></div>
        <div className='w-full h-full absolute  flex items-center justify-between'>
            {children}
        </div>
    </div>
  )
}

export default DialogBox

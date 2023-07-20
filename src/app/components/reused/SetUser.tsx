'use client'


import { setUniqueUserId } from '@/utils/functions'
import React, { useEffect } from 'react'

const SetUser = () => {
    useEffect(()=>{
        setUniqueUserId()
    },[])
  return (
    <></>
  )
}

export default SetUser

'use client'

import { setUniqueUserId } from '@/lib/utils/Functions'
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

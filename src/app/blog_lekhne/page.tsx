import React from 'react'
import Addnote from './components/AaddNote'
import { TypeParamProps } from '@/utils/types'
import KeyLayout from '../components/reused/KeyLayout'

const page = (props: TypeParamProps) => {
  return (

      <Addnote id={props.searchParams.hexid} />

  )
}

export default page

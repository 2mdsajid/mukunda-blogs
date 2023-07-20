import React from 'react'
import Addnote from './components/AaddNote'
import { TypeParamProps } from '@/utils/types'
import KeyLayout from '../components/reused/KeyLayout'

const page = (props: TypeParamProps) => {
  return (
    <KeyLayout>
      <Addnote id={props.searchParams.hexid} />
    </KeyLayout>
  )
}

export default page

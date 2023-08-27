import React from 'react'
import SingleNoteViewSkeleton from './components/SingleNoteViewSkeleton'
import KeyLayout from '../components/reused/KeyLayout'

const loading = () => {
    return (
        <KeyLayout>
            <SingleNoteViewSkeleton />
        </KeyLayout>
    )
}

export default loading

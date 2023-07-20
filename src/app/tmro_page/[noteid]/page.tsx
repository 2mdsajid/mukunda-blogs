'use client'

import { BACKEND } from '@/utils/data';
import React, { useContext, useEffect, useState } from 'react';
import AdminNoteView from './components/AdminNoteView';
import { TypeParamProps, mongoNote } from '@/utils/types';
import KeyLayout from '@/app/components/reused/KeyLayout';

type NoteHere = {
  note: mongoNote;
};

const Page = (props: TypeParamProps) => {
  const [noteData, setNoteData] = useState<mongoNote | null>(null);

  useEffect(() => {
    const fetchNoteById = async () => {
      try {
        const response = await fetch(`${BACKEND}/getnotebynoteid/${props.params.noteid}`)
        const data = await response.json()
        setNoteData(data.note)
      } catch (error) {
        console.error('Error fetching note:', error);
      }
    }
    fetchNoteById()
  }, [])

  return (
    <KeyLayout>
      <div className='w-full md:w-[80%] lg:w-[70%] mx-auto'>
        {noteData ? <AdminNoteView note={noteData} /> : <p>Loading...</p>}
      </div>
    </KeyLayout>
  );
};

export default Page;

import React, { useEffect, useMemo, useState } from 'react'
import NumberCard from './NumberCard';
import Link from 'next/link';
import { HighestViewNote } from '@/utils/types';



type VisitorsViewsProps = {
  viewssum: number;
  highestViewNote: HighestViewNote;
};

const VisitorsViews = ({ viewssum, highestViewNote }: VisitorsViewsProps) => {

  return (
    <div className='w-full px-4 sm:px-0 pt-5 md:pl-5 overflow-auto'>
      <div className='w-full flex flex-wrap'>
        <NumberCard label='Total Views' value={viewssum} />
        <div className="p-2 shadow-md md:pl-5 border px-3 py-2 m-2 rounded-md w-max">
          <p className="text-3xl font-bold">{highestViewNote.views}</p>
          <h3 className="text-lg font-semibold">Highest Views on a Note</h3>
          <p className="text-sm"><Link href={`/admin_views/${highestViewNote.noteid}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{highestViewNote.title}</Link> </p>
        </div>
      </div>
    </div>

  )
}

export default VisitorsViews

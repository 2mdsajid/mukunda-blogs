import { BACKEND } from '@/utils/data';
import { setUniqueUserId } from '@/utils/functions';
import React, { useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Likes = ({upvote,uniqueid,id}:{upvote:string[],uniqueid:string,id:string}) => {
    const [notelikes, setNoteLikes] = useState<string[]>(upvote)
    

    const handleLike = async () => {
        const isNoteLiked = notelikes.includes(uniqueid);
        if (isNoteLiked) {
            setNoteLikes(notelikes.filter(id => id !== uniqueid));
        } else {
            setNoteLikes([...notelikes, uniqueid]);
        }
        // const res = await fetch(BACKEND + '/addvote', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         id,
        //         uniqueid
        //     }),
        // });
        // const data = await res.json();
    }


  return (
    <div className='flex items-center text-2xl'>
    <button className="mr-2" onClick={handleLike}>
        {notelikes?.includes(uniqueid) ? <div className='text-red-600'>
            <AiFillHeart />
        </div> : <AiOutlineHeart />}
    </button>
    <span>{notelikes?.length}</span>
</div>
  )
}

export default Likes

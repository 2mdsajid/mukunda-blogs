'use client'

import { setUniqueUserId } from '@/utils/functions';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react'

const AddViewsAndUserid = () => {

    const AddViews = async () => {
        console.log('views')

        const isAdminCookie = Cookies.get('isAdmin');
        if (isAdminCookie) {
            return
        }
        // const res = await fetch(BACKEND + '/addviews', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         id: note._id,
        //     }),
        // });
        // const data = await res.json();

        const uniqueid = await setUniqueUserId()
        console.log("🚀 ~ file: AddViewsAndUserid.tsx:28 ~ AddViews ~ uniqueid:", uniqueid)
    }

    useEffect(() => {
        AddViews()
    }, [])

    return (
        null
    )
}

export default AddViewsAndUserid

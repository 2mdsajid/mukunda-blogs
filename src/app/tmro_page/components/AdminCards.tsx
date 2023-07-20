import React, { useState } from 'react'
import { Alert, AlertColor } from '@mui/material';
import { LuArrowUpRight } from 'react-icons/lu';
import { AdminCardsProps } from '@/utils/types';
import { BACKEND } from '@/utils/data';




const AdminCards: React.FC<AdminCardsProps> = ({ note, handleEdit }) => {
    const [confirmDelete, setConfirmDelete] = useState(false)
    const [alertseverity, setalertSeverity] = useState<AlertColor>('success');
    const [alertmessage, setalertMessage] = useState<string>('');
    const [showalert, setshowAlert] = useState<boolean>(false)

    async function handleDelete(id: string) {
        const response = await fetch(BACKEND + '/deletenote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        });

        const data = await response.json();
        setshowAlert(true)
        setalertMessage(data.message)
        setalertSeverity('success')
    }

    function visitBlog(event: React.MouseEvent<HTMLDivElement>) {
        const id = event.currentTarget.id;
        const url = `tmro_page/${id}`;
        window.open(url, '_blank');
    }

    return (
        <div key={note._id} className="border border-accent p-4 rounded-lg mb-4 w-full">
            <div className='w-full  border-black text-3xl flex justify-between'>
                <p className='text-sm text-dark-accent font-bold capitalize'>{note.category}</p>
                <div onClick={visitBlog} id={note.noteid} className='cursor-pointer'>
                    <LuArrowUpRight />
                </div>
            </div>
            <h2 className="text-xl font-bold mb-2">{note.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{note.intro}</p>
            <div className='flex justify-between'>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{note.views} views</p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{note.upvotes} likes</p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{note.commentslength} comments</p>
            {note.date && (
                <p className="text-xs  mb-4">
                    {new Date(note.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </p>
            )}

            {note.isupdated?.state === true &&
                <p className="text-xs mb-4 text-blue-600 font-bold">updated : &nbsp;
                    {new Date(note.isupdated?.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </p>}

            {confirmDelete ? <>
                {showalert && <div className='my-1'><Alert severity={alertseverity} onClose={() => { setshowAlert(false) }}>{alertmessage}</Alert></div>}

                <button
                    className="p-2 z-10 text-sm rounded-sm text-white bg-red-500  hover:text-red-600 transition-colors duration-300 focus:outline-none"
                    onClick={() => handleDelete(note._id)}>
                    Confirm Deletion
                </button>
            </> :
                <div className="flex">
                    <button onClick={() => setConfirmDelete(true)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">Delete</button>
                    <button onClick={() => handleEdit(note._id)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Edit</button>
                </div>}
        </div>
    )
}

export default AdminCards

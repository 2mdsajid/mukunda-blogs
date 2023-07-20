'use client'

import FancyInput from '@/app/components/reused/FancyInput';
import FancyTextBox from '@/app/components/reused/FancyTextBox';
import SubmitButton from '@/app/components/reused/SubmitButton';
import { BACKEND } from '@/utils/data';
import { TypeComment } from '@/utils/types';
import React, { FormEvent, useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const CommentsDisplay = ({ isadmin,notecomments, uniqueid, id }: {isadmin:boolean, notecomments: TypeComment[] | undefined, uniqueid: string, id: string }) => {
console.log("🚀 ~ file: CommentsDisplay.tsx:12 ~ CommentsDisplay ~ isadmin:", isadmin)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState<TypeComment[]>([])

    const setNameFunction = (val: string) => setName(val)
    const setEmailFunction = (val: string) => setEmail(val);
    const setCommentFunction = (val: string) => setComment(val);


    const handleLikeReplies = async (commentid: string) => {

        // Find the comment by commentId
        const comment = comments.find(comment => comment._id === commentid);

        if (comment) {
            const { likes } = comment;
            const isCommentLiked = likes.includes(uniqueid);

            if (isCommentLiked) {
                comment.likes = likes.filter(id => id !== uniqueid);
            } else {
                comment.likes = [...likes, uniqueid];
            }

            const currentCommentIndex = comments.findIndex(comment => comment._id === commentid);
            if (currentCommentIndex !== -1) {
                const updatedComments = [...comments];
                updatedComments[currentCommentIndex].likes = comment.likes;
                setComments(updatedComments);
            }
        }

        // try {
        //     const res = await fetch(BACKEND + '/addcommentvote', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             noteid: id,
        //             commentid,
        //             uniqueid
        //         }),
        //     });
        //     const data = await res.json();
        // } catch (error) {
        //     console.log(error)
        // }
    }

    // replies----------------------------
    const [replyname, setReplyName] = useState<string>('');
    const [replyemail, setReplyEmail] = useState<string>('');
    const [replymessage, setReplyMessage] = useState<string>('');

    // Setter functions for form values
    const setReplyNameFunction = (val: string) => setReplyName(val);
    const setReplyEmailFunction = (val: string) => setReplyEmail(val);
    const setReplyMessageFunction = (val: string) => setReplyMessage(val);


    const [commentClick, setCommentclick] = useState(false)
    const [commentReplyClick, setCommentReplyClick] = useState(false)
    const [replyFormId, setReplyFormId] = useState('')

    // toggle reply form
    const handleReplyButtonClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const buttonId = e.currentTarget.id;
        setReplyFormId(buttonId);
    }

    // sending replies to database
    const handleCommentReplySubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCommentReplyClick(true)
        const formData = new FormData(e.currentTarget);

        // Retrieve form values using the input names
        // const name = formData.get('name') as string;
        // const email = formData.get('email') as string;
        // const reply = formData.get('reply') as string;
        const formid = e.currentTarget.id

        // const res = await fetch(BACKEND + '/addreply', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         noteid: id,
        //         commentid: formid,
        //         name,
        //         email,
        //         reply,
        //     }),
        // });

        const currentCommentIndex = comments.findIndex(comment => comment._id === formid);
        if (currentCommentIndex !== -1) {
            const updatedComments = [...comments];
            const newReply = {
                name: replyname,
                email: replyemail,
                reply: replymessage,
                likes: []
            };
            updatedComments[currentCommentIndex].replies.push(newReply);
            setComments(updatedComments);
        }

        // const data = await res.json();
        // if (data.status === 201) {
        //     // Clear the form fields
        //     formData.set('name', 'llll');
        //     formData.set('email', '');
        //     formData.set('reply', '');
        // }
        setReplyEmail('')
        setReplyName('')
        setReplyMessage('')
        setReplyFormId('')
        setCommentReplyClick(false)
    };

    // sending comments to database
    const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setCommentclick(true)
        // const res = await fetch(BACKEND + '/addcomment', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         id,
        //         name,
        //         email,
        //         comment,
        //     }),
        // });

        setComments([...comments, { name, email, comment, likes: [], replies: [], _id: 'someid' }])

        setCommentclick(false)

        // const data = await res.json();

        // if (data.status === 201) {
        //     console.log(data);
        //     setName('')
        //     setComment('')
        //     setEmail('')
        // }

    }

    //   setting initial comments
    useEffect(() => {
        if (notecomments) {
            const newComments = notecomments.map(comment => {
                return {
                    _id: comment._id || '',
                    name: comment.name || "",
                    email: comment.email || "",
                    comment: comment.comment || "",
                    likes: comment.likes || [],
                    replies: comment.replies || []
                }
            })
            setComments(newComments)
        }
    }, [])


    return (
        <>
            <div className='w-full '>
                <h3 className="text-xl font-bold mb-4">Comments</h3>
                {comments && comments.length > 0 ? (
                    <ul>
                        {comments.map((comment, index) => (
                            <li className='mt-[1.1rem]' key={index}>
                                <p className="font-bold text-xl text-dark-accent">{comment.name}</p>
                                {isadmin && <p className='font-semibold mb-4 text-gray-600 dark:text-gray-400'>{comment.email}</p>}
                                <p>{comment.comment}</p>

                                {/* comments likes and reply btn */}
                                <div className='flex space-x-4 items-center'>
                                    <div className='flex items-center'>
                                        <button key={comment._id} className="mr-2" onClick={() => handleLikeReplies(comment._id)}>
                                            {comment.likes.includes(uniqueid) ?
                                                <div className='text-dark-accent'>
                                                    <AiFillHeart />
                                                </div> : <AiOutlineHeart />}
                                        </button>
                                        <span>{comment.likes.length}</span>
                                    </div>
                                    <div>
                                        <button id={comment._id} className='font-semibold' onClick={handleReplyButtonClick}>Reply</button>
                                    </div>
                                </div>

                                {/* reply section starts */}
                                <div className='ml-8 my-2'>
                                    {comment.replies.length > 0 && <p className='text-xs '>{'------replies-----'}</p>}
                                    {comment.replies.map((reply, index) => {
                                        return <div key={index} className='my-2'>
                                            <p className="font-semibold text-lg">{reply.name}</p>
                                            {isadmin && <p>{reply.email}</p>}
                                            <p className='text-sm'>{reply.reply}</p>
                                        </div>
                                    })}
                                </div>
                                {(replyFormId === comment._id) && <div>
                                    <form id={comment._id} onSubmit={(e) => handleCommentReplySubmit(e)} className={`bg-dark-accent w-full p-4 rounded-lg mt-10`}>
                                        <FancyInput value={replyname} setValueFunction={setReplyNameFunction} label="Name" />
                                        <FancyInput value={replyemail} setValueFunction={setReplyEmailFunction} label="Email" />
                                        <FancyTextBox value={replymessage} setValueFunction={setReplyMessageFunction} label="Your Reply" />
                                        <SubmitButton isClicked={commentClick} />
                                    </form>
                                </div>}
                                {/* reply section ends */}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No comments yet.</p>
                )}
            </div>

            {/* comment form */}
            {!replyFormId &&
                <div className='flex w-full'>
                    <form onSubmit={handleCommentSubmit} className={` w-full sm:w-[80%]  border border-dark-accent bg-dark-accent p-4 rounded-lg mt-10`}>
                        <h3 className="text-xl text-white font-bold mb-4">Add Comment</h3>
                        <FancyInput value={name} setValueFunction={setNameFunction} label='Name' />
                        <FancyInput value={email} setValueFunction={setEmailFunction} label='Email' />
                        <FancyTextBox value={comment} setValueFunction={setCommentFunction} label='Comment' />
                        <SubmitButton isClicked={commentClick} />
                    </form>
                </div>
            }

        </>
    )
}


export default CommentsDisplay

// <div className="mb-4">
//     <label htmlFor="name" className={` block text-sm font-medium mb-2`}>Name</label>
//     <input required type="text" value={name} onChange={(e) => setName(e.currentTarget.value)} id="name" placeholder="Your name" className={`p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500  block w-full sm:text-sm border-gray-300 rounded-md`} />
// </div>

// <div className="mb-4">
//     <label htmlFor="email" className={` block text-sm font-medium mb-2`}>Email</label>
//     <input required type="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} id="email" placeholder="youremail@example.com" className={`p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500  block w-full sm:text-sm border-gray-300 rounded-md`} />
// </div>

// <div className="mb-4">
//     <label htmlFor="comment" className={` block text-sm font-medium mb-2`}>comment</label>
//     <textarea value={comment} required onChange={(e) => setComment(e.currentTarget.value)} id="comment" placeholder="comment" className={`p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500  block w-full sm:text-sm border-gray-300 rounded-md`}></textarea>
// </div>
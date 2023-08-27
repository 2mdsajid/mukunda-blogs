'use client'

import React, { MouseEventHandler, useRef, useState } from 'react'
import { Alert, AlertColor } from '@mui/material'
import  { useRouter } from 'next/navigation';
import { FormDataType } from '@/utils/types';
import { BACKEND, FRONTEND } from '@/utils/data';
import { ParsedElement } from '@/utils/functions';

type PreviewProps = {
    formData: FormDataType;
    togglePreview: MouseEventHandler<HTMLButtonElement>;
}

const FormPreview = ({ formData, togglePreview }: PreviewProps) => {

    const router = useRouter()
    const closeButtonRef = useRef<HTMLButtonElement>(null);


    const [showlog, setShowLog] = useState(false)
    const [logState, setLogState] = useState('')
    const [logMsg, setLogMsg] = useState('')

    const [isSubmitting, setIsSubmitting] = useState(false);


    // mui for editor preview box
    const [editoralertseverity, seteditoralertSeverity] = useState<AlertColor>('warning');
    const [editoralertmessage, seteditoralertMessage] = useState<string>('');
    const [showeditoralert, setshoweditorAlert] = useState<boolean>(false)
    const [showeditorprogress, setshoweditorProgress] = useState<boolean>(false)


    // preview TOGGLE for NOTE BFORE SENDING TO BACKEND
    // const togglePreview = () => {
    //     setIsPreview(!ispreview)
    //     // formData.content = content
    // }

    // send note for PUBLISH------------
    const sendData = async (formData: FormDataType) => {
        setshoweditorProgress(true)
        if (!formData.title || !formData.noteid || !formData.category || !formData.intro || !formData.content || !formData.keywords || !formData.readtime || !formData.introimage) {
            seteditoralertMessage("Please fill in all required fields");
            seteditoralertSeverity('warning')
            setshoweditorAlert(true)
        } else {
            setshoweditorProgress(true)
            try {
                const response = await fetch(BACKEND + '/savenote', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                const data = await response.json()
                setshoweditorAlert(true)
                seteditoralertMessage(data.message)

                if (data.status === 200) {
                    // const res = await fetch(`${FRONTEND}/api/fetchrecentnotes?category=${formData.category}`)
                    // const data2 = await res.json()
                    setshoweditorProgress(false)
                    if (closeButtonRef.current) {
                        closeButtonRef.current.click();
                    }
                    // const reval = await fetch(`/api/revalidate`)

                    const reval = await fetch(`/api/revalidate`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    const data = await reval.json()


                    console.log("🚀 ~ file: FormPreview.tsx:71 ~ sendData ~ reval:", data)
                    // router.push('/tmro_page')
                    return
                } else {
                    setshoweditorProgress(false)
                    seteditoralertSeverity('warning')
                }



            } catch (error) {
                console.error('Error saving note:', error);
                // seteditoralertMessage(error?.message)
            }
        }
    }

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center px-4">
            {/* backdrop to make background glassy */}
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-90 backdrop-opacity-40"></div>

            {/* contents of the blog to be displayed */}
            <div className="relative z-10 w-full md:w-1/2 h-3/4 overflow-auto bg-white rounded-lg">
                <div className="p-4">
                    <h1 className="text-xs font-bold">{formData.title}</h1>
                    <p className="text-xs font-medium mt-4">{formData.intro}</p>
                    <p className="text-xs font-medium mt-4">{formData.keywords}</p>
                    <p className="text-xs font-medium mt-4">{formData.readtime}</p>
                    <p className="text-xs font-medium mt-4">{formData.category}</p>
                    <p className="mt-4 text-xs formdata-content-class">{ParsedElement(formData.content)}</p>
                </div>

                {showeditoralert && <div className='my-1'><Alert severity={editoralertseverity} onClose={() => { setshoweditorAlert(false) }}>{editoralertmessage}</Alert></div>}
                {/* {showlog && <p className={`border border-red px-4 py-2 my-3  w-[95%] rounded-e-md text-black ${(logState === 'success') ? 'bg-green-400' : 'bg-red-400'}`}>{logMsg}</p>} */}

                <div className={`w-[30%] mx-auto px-3 flex justify-center font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}>
                    <button
                        className={`w-full h-full rounded py-2 focus:outline-none focus:shadow-outline`}
                        type="submit"
                        disabled={showeditorprogress}
                        onClick={(e) => sendData(formData)}>
                        {showeditorprogress ? 'Submitting...' : 'Submit'}
                    </button>
                </div>

                {/* Close button */}
                <button ref={closeButtonRef} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={togglePreview}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default FormPreview

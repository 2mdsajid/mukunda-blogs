'use client'

import { BACKEND } from '@/utils/data';
import { AlertColor, Alert } from '@mui/material';
import dynamic from 'next/dynamic';
import router from 'next/router';
import { useState, useRef, ChangeEvent, useEffect } from 'react';
import { DANGEROUS__uploadFiles } from 'uploadthing/client';
import FormPreview from './FormPreview';
import MiniPreview from './MiniPreview';
import UploadImages from './UploadImages';
import { FormDataType, ImageInResponse } from '@/utils/types';
// import DraftEditor from '@/components/Drafteditor';
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })



const Addnote = ({id}:{id:string}) => {
    // state for preview dialog box
    const [ispreview, setIsPreview] = useState<Boolean>(false)
    const [isMiniPreview, setIsMiniPreview] = useState(true)

    const toggleMiniPreview = () => {
        setIsMiniPreview(!isMiniPreview)
    }

    // setting note id -- if
    const [currentState, setCurrentstate] = useState('basic')
    const [finalImages, setFinalImages] = useState<ImageInResponse[]>([])

    // MUI for note section only
    const [alertseverity, setalertSeverity] = useState<AlertColor>('success');
    const [alertmessage, setalertMessage] = useState<string>('');
    const [showalert, setshowAlert] = useState<boolean>(false)
    const [showprogress, setshowProgress] = useState<boolean>(false)

    // mui for editor preview box
    const [editoralertseverity, seteditoralertSeverity] = useState<AlertColor>('warning');
    const [editoralertmessage, seteditoralertMessage] = useState<string>('');
    const [showeditoralert, setshoweditorAlert] = useState<boolean>(false)
    const [showeditorprogress, setshoweditorProgress] = useState<boolean>(false)
    const [isIntroUploading,setIsIntroUploading] = useState(false)

    const togglePreview = () => {
        setIsPreview(!ispreview);
    }

    // to store the input values
    const [formData, setFormData] = useState<FormDataType>({
        id: '',
        title: '',
        noteid: '',
        category: 'mbbslife',
        subcategory: '',
        intro: '',
        content: '',
        keywords: '',
        readtime: '',
        introimage: '',
    });

    const [introimage, setIntroImage] = useState(formData.introimage)

    // jodit editor
    const editor = useRef(null);
    const [content, setContent] = useState<string>(formData.content);


    // store the values in their respective fields i form data
    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;

        if (!(name === 'category' && value === 'studyres')) {
            setFormData((prevState) => ({
                ...prevState,
                ['subcategory']: '',
            }));
        }

        if (name === 'noteid' && value) {
            const newnoteid = value.replace(/\s+/g, "-")
            setFormData((prevState) => ({
                ...prevState,
                ['noteid']: newnoteid,
            }));

            return
        }

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    // add to local storage as draft
    const handleAddDraft = async (e: React.FormEvent<HTMLButtonElement>) => {

        e.preventDefault()
        formData.content = content
        try {
            setshoweditorProgress(true)
            const response = await fetch(BACKEND + '/savedraft', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json()
            setshoweditorAlert(true)
            seteditoralertMessage(data.message)

            if (data.status === 201) {
                setshoweditorProgress(false)
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


    const onChange = (data: string) => {
        setContent(data)
    }

    // set intro image
    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsIntroUploading(true)
        const files = event.target.files;
        if (!files) return;
        const newintro = Array.from(files).map((file) => file)
        try {
            const res = await DANGEROUS__uploadFiles(newintro, 'imageUploader');
            formData.introimage = res[0].fileUrl
            setIntroImage(res[0].fileUrl)
            setIsIntroUploading(false)
        } catch (error: any) {
            throw new Error('Error')
        }
    };


    // function to fetch a note using its id
    const fetchNoteById = async (id: string) => {
        try {
            const response = await fetch(BACKEND + `/getnotebyid/${id}`);
            const data = await response.json();
            if (response.ok) {
                const { note } = data
                const newFormData: FormDataType = {
                    id: note._id,
                    title: note.title,
                    noteid: note.noteid,
                    category: note.category,
                    subcategory: note.subcategory || '',
                    intro: note.intro,
                    content: note.content,
                    keywords: note.keywords || '',
                    readtime: note.readtime || '',
                    introimage: note.introimage || '',
                };

                setFormData(newFormData)
                setContent(note.content)
                setIntroImage(newFormData.introimage)
            } else {
                const { message } = data;
                console.error(message);
            }
        } catch (error) {
            console.error('Error fetching note:', error);
        }
    };

    // to get the id from the router -- to fetch the data to edit 
    useEffect(() => {
        if (id) {
            fetchNoteById(id as string)
        }
    }, [])


    return (
        <div className={`min-h-screen w-screen  `}>
            {/* buttons to switch between editors */}
            <div className='w-full  flex border-t border-black'>
                <button className={` border-black px-4 py-2 border-b ${currentState === 'basic' && 'bg-blue-200'}`} onClick={(e) => {
                    setCurrentstate(e.currentTarget.id)
                    setIsMiniPreview(true)
                }} id='basic'>Basics</button>
                <button className={`border-l border-r border-black px-4 py-2 border-b ${currentState === 'files' && 'bg-blue-200'}`}
                    onClick={(e) => {
                        setCurrentstate(e.currentTarget.id)
                        setIsMiniPreview(false)
                    }}
                    id='files'>Files</button>
                <button className={` border-black px-4 py-2 border-b border-r ${currentState === 'content' && 'bg-blue-200'}`} onClick={(e) => {
                    setCurrentstate(e.currentTarget.id)
                    setIsMiniPreview(true)
                }} id='content'>Content</button>
            </div>

            {/* for other stuffs & images */}
            <div className={`w-full h-full flex flex-wrap flex-col md:flex-row  border-red-500`}>
                {currentState === 'basic' && <div className={`w-full md:w-1/2 xl:w-[40%] py-6 px-4 `}>
                    {/* FORM FOR THE NOTE */}

                    {/* title */}
                    <div className="mb-4">
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className={`w-full p-2 rounded border border-gray-400 
                                `}
                            placeholder="Title"
                        />
                    </div>

                    {/* noteid */}
                    <div className="mb-4">
                        <input
                            type="text"
                            name="noteid"
                            value={formData.noteid}
                            onChange={handleInputChange}
                            className={`w-full p-2 rounded border border-gray-400 
                                `}
                            placeholder="Title ( for unite-note-id )"
                        />
                    </div>

                    {/* keywords */}
                    <div className="mb-4">
                        <input
                            type="text"
                            name="keywords"
                            value={formData.keywords}
                            onChange={handleInputChange}
                            className={`w-full p-2 rounded border border-gray-400 
                                `}
                            placeholder="Keywords( comma seperated )"
                        />
                    </div>

                    {/* readtime */}
                    <div className="mb-4">
                        <input
                            type="text"
                            name="readtime"
                            value={formData.readtime}
                            onChange={handleInputChange}
                            className={`w-full p-2 rounded border border-gray-400 
                                `}
                            placeholder="Readtime"
                        />
                    </div>

                    {/* category */}
                    <div className="mb-4">
                        <label htmlFor="category" className="block mb-2 font-bold text-gray-700">Select a category:</label>
                        <div className="relative">
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                className={`w-full p-2 rounded border border-gray-400  appearance-none focus:outline-none focus:shadow-outline`}>
                                <option value="mbbslife">MBBS Life</option>
                                <option value="politics">Politics</option>
                                <option value="philosophy">philosophy</option>
                                <option value="religion">religion</option>
                                <option value="nepali">nepali</option>
                                <option value="english">english</option>
                                <option value="research">research</option>
                                <option value="foryou">for you</option>
                                <option value="test">test</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* subcategory for some categories----- non functional as of now */}
                    {formData.category === 'studyres' && <div className="mb-4">
                        <label htmlFor="subcategory" className="block mb-2 font-bold text-gray-700">Select a sub-category:</label>
                        <div className="relative">
                            <select
                                id="subcategory"
                                name="subcategory"
                                value={formData.subcategory}
                                onChange={handleInputChange}
                                className={`w-full p-2 rounded border border-gray-400  appearance-none focus:outline-none focus:shadow-outline`}>
                                <option value="mbbsbooks">MBBS Books</option>
                                <option value="mynotes">My Notes</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>}



                    {/* intro */}
                    <div className="mb-4">
                        <textarea
                            name="intro"
                            value={formData.intro}
                            onChange={handleInputChange}
                            className={`w-full p-2 rounded border border-gray-400 `}
                            placeholder="Introduction"
                            rows={4}
                        />
                    </div>

                    {/* intro image */}
                    <label htmlFor="category" className="block mb-2 font-bold text-gray-700">Intro Image*</label>
                    <div className="flex flex-col items-start space-y-3">
                        <label htmlFor="fileInput" className="relative cursor-pointer inline-block font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm">
                        {isIntroUploading ? 'uploading...' : 'Choose File'}
                            </label>
                            <input
                                id="fileInput"
                                type="file"
                                className="sr-only"
                                onChange={handleUpload}
                            />
                        {introimage && (
                            <div className="ml-4">
                                <img src={introimage} className="max-h-40 object-contain" alt="Intro Image" />
                            </div>
                        )}
                    </div>

                </div>}

                {/* images section */}
                {currentState === 'files' &&
                    <div className='w-full'>
                        <UploadImages setFinalImages={setFinalImages} finalImages={finalImages} />
                    </div>}

                {/* rich text editor */}
                {currentState === 'content' && <div className={`w-full md:w-1/2 xl:w-[60%] py-6 px-4 `}>
                    <div className={`w-full mb-4 pb-10`}>

                        <JoditEditor
                            ref={editor}
                            value={content}
                            onBlur={newContent => {
                                setContent(newContent)
                                formData.content = newContent
                            }} // preferred to use only this option to update the content for performance reasons
                            onChange={newContent => {
                                setContent(newContent)
                                formData.content = newContent
                            }}
                        />
                    </div>

                    {/* BUTTONS OF THE FORM --- SAVE & DRAFT*/}
                    {showeditoralert && <div className='my-1'><Alert severity={editoralertseverity} onClose={() => { setshoweditorAlert(false) }}>{editoralertmessage}</Alert></div>}
                    <div className='flex flex-wrap space-x-1'>

                        <div className={`w-[30%] px-3 flex justify-center font-semibold text-white bg-green-500 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}>
                            <button
                                className={`w-full h-full rounded py-2 focus:outline-none focus:shadow-outline`}
                                type="button"
                                onClick={handleAddDraft}>
                               {showeditorprogress ? 'Adding Draft' : 'Add Draft'}
                            </button>
                        </div>
                    </div>
                </div>}

            </div>

            {/* dialg box for preview of the blog before submission */}
            <div className='w-full h-full'>
                {ispreview ? <FormPreview formData={formData} togglePreview={togglePreview} /> :
                    <>{isMiniPreview && <MiniPreview formData={formData} togglePreview={togglePreview} />}</>}
            </div>

        </div>
    )
}

export default Addnote

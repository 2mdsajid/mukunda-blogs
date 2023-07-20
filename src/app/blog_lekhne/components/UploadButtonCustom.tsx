import React, { useState } from 'react';
import { DANGEROUS__uploadFiles } from 'uploadthing/client';

import { FiCheck, FiCopy } from 'react-icons/fi';


type UploadComponentProps = {
  onUploadComplete?: (response: any) => void;
  onUploadError?: (error: Error) => void;
};

const UploadComponent = ({ onUploadComplete, onUploadError }: UploadComponentProps) => {


  const [tag, setTag] = useState('')
  const [currentLink, setCurrentLink] = useState('')
  const [typeOf, setTypeOf] = useState<string>('')
  const [click, setClick] = useState(false)

  const [isLinkPreview, setIsLinkPreview] = useState<boolean>(false)
  const ToggleLInkPreview = () => {
    console.log('pppppp')
    setIsLinkPreview(!isLinkPreview)
  }

  //   to store the images before sending to backend
  const [images, setImages] = useState<File[]>([]);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    const newImages = Array.from(files).map((file) => file)
    setImages((prevState) => [...prevState, ...newImages]);
  };


  const handleUpload = async () => {
    setClick(true)
    try {
      const res = await DANGEROUS__uploadFiles(images, 'imageUploader');
      onUploadComplete && onUploadComplete(res);
      setImages([])
      setClick(false)
    } catch (error: any) {
      onUploadError && onUploadError(error as Error);
    }
  };



  function GenerateTag(): void {
    const youtubeUrl = currentLink;

    // Check if it's a YouTube link
    if (typeOf === 'yt') {
      const videoId = extractVideoId(youtubeUrl);
      const embedHtml = `<div className="w-full">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/${videoId}"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>`;

      console.log(embedHtml);
      setTag(embedHtml)
      // Render or store the YouTube embed HTML as needed
    }

    // Check if it's a PDF link
    if (typeOf === 'pdf') {
      const downloadLink = currentLink

      console.log(downloadLink);
      // Render or use the download link as needed
      const downloadButton = (
        `<a href="${downloadLink}" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download PDF
        </a>`
      );

      console.log(downloadButton);
      // Render the styled download button
      setTag(downloadButton)
    }
  }
  // to toggle the copy icon 
  const [copied, setCopied] = useState(false);
  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>, text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setClick(false)
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };



  return (
    <div className="mt-4 w-full border flex flex-wrap items-center space-x-2">
      <div className='px-2 border-r border-black'>
      <label htmlFor="fileInput" className="relative cursor-pointer font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500">
          Choose files
          <input
            id="fileInput"
            type="file"
            className="sr-only"
            multiple
            onChange={handleImageChange}
          />
        </label>
        {/* <p className="pl-1">or drag and drop</p> */}
        {images.length > 0 && (
          <button
            className="mt-4 bg-blue-600 rounded-md w-36 h-10 flex items-center justify-center"
            onClick={handleUpload}>
            {click ? 'uploading....' : `Upload ${images.length} file`}
          </button>
        )}
      </div>
      <button
        className="px-2 border-r border-black cursor-pointer"
        onClick={() => {
          ToggleLInkPreview();
          setTypeOf('yt');
        }}
      >
        YouTube Link
      </button>
      <button
        className="px-2 border-r border-black cursor-pointer"
        onClick={() => {
          ToggleLInkPreview();
          setTypeOf('pdf');
        }}
      >
        PDF File
      </button>

      {/* dialog for youtube and pdf */}
      {isLinkPreview && (
        <div
          onClick={ToggleLInkPreview}
          className="fixed top-0 -left-2 w-screen h-screen bg-opacity-50 backdrop-blur-sm  flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()} // Prevent click propagation inside the dialog
            className="bg-white w-1/2 h-40vh border p-4"
          >
            <p>Make sure to upload the PDF file in Google Drive for ease.</p>
            <input
              type="text"
              placeholder="Link"
              onChange={(e) => setCurrentLink(e.currentTarget.value)}
              className="border border-gray-300 rounded-md px-2 py-1 mt-2 w-full"
              onClick={(e) => e.stopPropagation()} // Prevent click propagation in the input element
            />
            <button
              onClick={GenerateTag}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Generate Tag
            </button>
            {tag && <>
              <p className='w-full overflow-auto h-16 text-xs'>{tag}</p>
              <button className='h-10' onClick={(e) => handleCopy(e, tag)}>
                {copied ? <FiCheck /> : <FiCopy />}
              </button>
            </>}
          </div>
        </div>
      )}



    </div>
  );
};

export default UploadComponent;
function extractVideoId(youtubeUrl: string) {
  throw new Error('Function not implemented.');
}


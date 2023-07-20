import { ImageInResponse } from "@/utils/types";
import { AlertColor } from "@mui/material";
import { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";
import UploadButtonCustom from "./UploadButtonCustom";
import { getFileType } from "@/utils/functions";

type ResponseType = {
    fileKey: string;
    fileUrl: string;
}

interface UploadImagesProps {
    setFinalImages: React.Dispatch<React.SetStateAction<ImageInResponse[]>>;
    finalImages: ImageInResponse[];
}

const UploadImages = ({ setFinalImages, finalImages }: UploadImagesProps) => {

    // MUI for note section only
    const [alertseverity, setalertSeverity] = useState<AlertColor>('success');
    const [alertmessage, setalertMessage] = useState<string>('');
    const [showalert, setshowAlert] = useState<boolean>(false)
    const [showprogress, setshowProgress] = useState<boolean>(false)



    // array to store images
    const [imagesinresponse, setImagesInResponse] = useState<string[]>([])


    // to toggle the copy icon 
    const [copied, setCopied] = useState(false);
    const handleCopy = (e: React.MouseEvent<HTMLButtonElement>, text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };


    // create images DIV-URL
    const [createdimages, setCreatedImages] = useState<string[]>([])

    const createImages = (index: number) => {
        setCreatedImages([]);

        const image = finalImages[index]
        const fileType = getFileType(image.url);

        if (fileType === 'image') {
            finalImages[index].tag = `<div className='w-3/4 lg:w-1/2 mx-auto my-3 lg:my-5 drop-shadow-sm'>
            <img src='${image.url}' alt="" />
            <div className='text-center'>
            <p>${image.caption}</p>
            <p><em>Source: ${image.source}</em></p>
            </div>
            </div>`;
        } else if (fileType === 'audio') {
            finalImages[index].tag = `<div className='w-3/4 lg:w-1/2 mx-auto my-3 lg:my-5 drop-shadow-sm'>
            <audio src='${image.url}' controls></audio>
            <div className='text-center'>
            <p>${image.caption}</p>
            <p><em>Source: ${image.source}</em></p>
            </div>
            </div>`;
        } else if (fileType === 'video') {
            finalImages[index].tag = `<div className='w-3/4 lg:w-1/2 mx-auto my-3 lg:my-5 drop-shadow-sm'>
            <video src='${image.url}' controls></video>
            <div className='text-center'>
            <p>${image.caption}</p>
            <p><em>Source: ${image.source}</em></p>
            </div>
            </div>`;
        }

        console.log("🚀 ~ file: UploadImages.tsx:47 ~ UploadImages ~ createdimages:", finalImages)
        // console.log("🚀 ~ formData.images:", formData.images);
    }

    const handleCaptionChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newImages = [...finalImages];
        newImages[index].caption = e.target.value;
        setFinalImages(newImages);
    };

    const handleSourceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newImages = [...finalImages];
        newImages[index].source = e.target.value;
        setFinalImages(newImages);
    };


    const handleUploadComplete = (response: ResponseType[]) => {
        console.log('Upload complete:', response);

        const newImages = response.map((res) => ({
            url: res.fileUrl,
            caption: '',
            source: '',
            tag: '',
        }));

        setFinalImages((prevImages) => [...prevImages, ...newImages]);

        // Process the upload response
    };

    const handleUploadError = (error: any) => {
        console.error('Upload error:', error);
        // Handle the upload error
    };


    // TO RENDER different files
    const ImageComponent = ({ src }: { src: string }) => (
        <img src={src} className='w-full' alt={`image`} />
    );

    const AudioComponent = ({ src }: { src: string }) => (
        <audio controls>
            <source src={src} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    );

    const VideoComponent = ({ src }: { src: string }) => (
        <video controls className='w-full'>
            <source src={src} type="video/mp4" />
            Your browser does not support the video element.
        </video>
    );


    const MediaComponent = ({ url, index }: { url: string, index: number }) => {
        const fileType = getFileType(url);

        if (fileType === 'image') {
            return <ImageComponent src={url} />;
        } else if (fileType === 'audio') {
            return <AudioComponent src={url} />;
        } else if (fileType === 'video') {
            return <VideoComponent src={url} />;
        } else {
            return null; // or render a fallback component for unknown file types
        }
    };




    return (
        <div className='w-full '>

            <div className='w-full'>
                <UploadButtonCustom
                    onUploadComplete={handleUploadComplete}
                    onUploadError={handleUploadError}
                />
            </div>

            <div className="w-full flex flex-col justify-center  items-center md:items-start md:flex-row md:flex-wrap space-x-1 space-y-1 p-Images  border-black py-5 mb-5">
                {/* display the incoming images */}
                {finalImages.map((image, index) => (
                    <div key={index} className='mb-3 w-[90%]  md:w-[24%] overflow-hidden border'>
                        {/* <img src={image.url} className='w-[40%]' alt={`image ${index + 1}`} /> */}
                        <div>
                            <MediaComponent url={image.url} index={index + 1} />
                        </div>
                        <div className='my-5 px-1'>
                            <input
                                type='text'
                                value={image.caption}
                                onChange={(e) => handleCaptionChange(e, index)}
                                placeholder='Enter caption'
                                className='w-full h-max overflow-scroll border p-1 rounded'
                            />
                            <input
                                type='text'
                                value={image.source}
                                onChange={(e) => handleSourceChange(e, index)}
                                placeholder='Enter source'
                                className='w-full h-max overflow-scroll border p-1 my-1 rounded'
                            />
                            <button
                                className="py-1 px-2 font-semibold text-white text-sm bg-blue-500 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                onClick={(e) => createImages(index)}
                                type="submit" 
                            >
                                create tag
                            </button>
                            {image.tag && <>
                                <p className='w-full overflow-auto h-16 text-xs'>{image.tag}</p>
                                <button className='h-10' onClick={(e) => handleCopy(e, image.tag)}>
                                    {copied ? <FiCheck /> : <FiCopy />}
                                </button>
                            </>}

                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default UploadImages



/* 


// from upload things
               <div className="min-w-[30%] px-3 flex justify-center font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">

                    <UploadButton<OurFileRouter>
                            endpoint="imageUploader"
                            multiple={true}
                            onClientUploadComplete={(res) => {
                                // Do something with the response
                                console.log("Files: ", res);
                            }}
                            onUploadError={(error: Error) => {
                                // Do something with the error.
                                console.log(`ERROR! ${error.message}`);
                            }}
                        />

       
                    </div>


// previous upload files fun
            <div className="relative mb-4">
                <label className="flex flex-col items-center px-4 py-2 bg-white text-gray-800 rounded-lg shadow-md tracking-wide border cursor-pointer hover:bg-gray-100">
                    <span className="mt-2 text-base leading-normal">
                        {images.length > 0 ? (
                            <ul className="list-disc pl-4">
                                {images.map((image, index) => (
                                    <>{image.name}, </>
                                ))}
                            </ul>
                        ) : (
                            "Select Images"
                        )}
                    </span>
                    <input
                        className="hidden"
                        type="file"
                        name="image"
                        multiple
                        onChange={handleImageChange}
                    />
                </label>
                <button onClick={uppp}>send</button>
            </div>


// image sending button
                 <button
                            className="w-full h-full rounded py-2 focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleSendImages}>
                            {showprogress ? "uploading images" : ' Add Images'}
                        </button>

// was sending the images to cloudinary through backend

    // sending IMAGES to CLOUDINARY & getting URLS from backend
    const handleSendImages = async () => {
        setshowProgress(true)
        if (images.length === 0) {
            setshowAlert(true)
            setalertSeverity('warning')
            setalertMessage('please add at lease one image')
            setshowProgress(false)
            return
        }

        if (images.length > 0) {
            const imageForm = new FormData();
            for (let i = 0; i < images.length; i++) {
                imageForm.append('images', images[i]);
            }

            try {
                const response = await fetch(BACKEND + '/saveimages', {
                    method: 'POST',
                    body: imageForm,
                });

                const data = await response.json();

                if (data.status === 201) {
                    setshowProgress(false)
                    console.log('Images saved successfully:', data);
                    setImages([])
                    setImagesInResponse([...imagesinresponse, ...data.imageurls])

                    // data.imageurls.map((url: ImageInResponse) => {
                    //     const newImg = {
                    //         image: url.image,
                    //         caption: url.caption,
                    //         source: url.source
                    //     }
                    //     formData.images.push(newImg)
                    // })
                }
            } catch (error) {
                console.error('Error saving images:', error);
            }
        } else {
            console.log('No images to save');
        }
    }

*/

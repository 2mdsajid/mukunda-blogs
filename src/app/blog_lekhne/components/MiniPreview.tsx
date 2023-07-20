import { ParsedElement } from '@/utils/functions';
import { FormDataType } from '@/utils/types';
import React, { MouseEventHandler } from 'react'


type PreviewProps = {
    formData: FormDataType;
    togglePreview: MouseEventHandler<HTMLDivElement>;
}


const MiniPreview = ({ formData, togglePreview }: PreviewProps) => {
    return (
        <div className='fixed top-20 right-0 border shadow-md rounded bg-white h-[50vh] w-[30%] lg:w-[25%] xl:w-[20%] overflow-auto cursor-pointer' onClick={togglePreview}>
            <div className="relative z-10 w-full overflow-auto overflow-x-hidden b rounded-lg ">
                <div className="p-4">
                <h1 className="text-xs font-bold">{formData.title}</h1>
                    <p className="text-xs font-medium mt-4">{formData.intro}</p>
                    {/* <img src={formData.introimage} /> */}
                    <p className="text-xs font-medium mt-4">{formData.keywords}</p>
                    <p className="text-xs font-medium mt-4">{formData.readtime}</p>
                    <p className="text-xs font-medium mt-4">{formData.category}</p>
                    <p className="mt-4 text-xs formdata-content-class">{ParsedElement(formData.content)}</p>
                </div>
            </div>
        </div>
    )
}

export default MiniPreview

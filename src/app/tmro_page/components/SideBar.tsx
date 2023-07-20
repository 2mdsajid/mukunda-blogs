import router from 'next/router';
import React from 'react'
type SideBarProps = {
    handleButtonClick: (buttonType: string) => void;
    activeButton: string;
};

const SideBar = ({ handleButtonClick, activeButton }: SideBarProps) => {
    return (
        <div className='flex flex-col  w-full h-full border-r border-dark-accent text-sm md:text-md '>
            <h1 className='text-center py-2 font-semibold'>Dashboard</h1>
            <div className='w-full h-full flex md:flex-col items-start '>

                <button
                    onClick={() => handleButtonClick("drafts")}
                    className={`${activeButton === 'drafts' && 'bg-blue-300'} text-center md:text-start border w-full px-5 py-3`}>
                    Drafts
                </button>

                <button
                    onClick={() => handleButtonClick("published")}
                    className={`${activeButton === 'published' && 'bg-blue-300'} text-center md:text-start border w-full px-5 py-3`}>
                    Published
                </button>

                <button
                    onClick={() => handleButtonClick("visitors")}
                    className={`${activeButton === 'visitors' && 'bg-blue-300'} text-center md:text-start border w-full px-5 py-3`}>
                    visitors
                </button>
            </div>

            {/* <button
                className="my-5 mx-auto bg-green-500 py-2 px-4 text-white hover:bg-green-700 font-bold border rounded-lg"
                onClick={() => {
                    router.push({
                        pathname: '/addnewnote'
                    }, '/addnote', // "as" argument
                    )
                }}
            >
                Add Note
            </button> */}
        </div>
    )
}

export default SideBar

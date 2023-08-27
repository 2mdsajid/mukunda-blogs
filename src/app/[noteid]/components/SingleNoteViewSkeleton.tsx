import ReusableSkeleton from "@/app/components/reused/Skeleton"
import React from "react"

const SingleNoteViewSkeleton = () => {
    return <div className="w-full px-4 md:px-10 lg:px-20 xl:px-32">
        <div className="singlenote px-6 text-secondary dark:text-dark-secondary ">
            <div className="md:my-6">
                <div className="flex flex-col gap-2">

                <ReusableSkeleton variant="text" height={20} width="20%" />
                <ReusableSkeleton variant="rectangular" height={40} width="100%" />
                <ReusableSkeleton variant="text" height={25} width="100%" />
                </div>
                <div className="h-[0.1rem] my-3 w-full bg-gray-400 dark:bg-gray-900"></div>
                <div className='w-full md:hidden mx-auto my-3 lg:my-5 drop-shadow-sm'>
                    <ReusableSkeleton variant="rectangular" width="100%" />
                </div>
                <div className="py-6">
                    <ReusableSkeleton variant="rectangular" width="100%" height={500} />
                    <ReusableSkeleton variant="rectangular" width="100%" height={500} />
                </div>
            </div>
        </div>
    </div>
}

export default SingleNoteViewSkeleton
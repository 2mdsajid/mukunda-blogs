import React from 'react';

const SectionTitle = ({ title }: { title: string }) => {
    return ( 
        <div className=" flex items-center justify-center flex-col space-y-2">
            <h1 className='text-2xl font-semibold'>{title}</h1>
            <div className='w-[5rem] h-[1px] bg-secondary dark:bg-dark-secondary'></div>
        </div>
    );
};

export default SectionTitle;

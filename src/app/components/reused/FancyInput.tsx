import { TypeInputProps } from '@/utils/types'
import React from 'react'

const FancyInput = ({value,setValueFunction,label}:TypeInputProps) => {
    return (
        <>
            <div className='relative mb-4'>
                <input
                id={label}
                    required
                    value={value}
                    onChange={(e) => setValueFunction(e.currentTarget.value)}
                    type="text"
                    autoComplete='off'
                    placeholder={label}
                    className="w-full peer h-10 bg-dark-accent dark:bg-dark-accent border pl-3 rounded-md placeholder-transparent focus:outline-none text-white dark:text-white shadow-md"
                />
                <label htmlFor="message" className="absolute left-2 -top-2 text-white dark:text-white bg-dark-accent dark:bg-dark-accent  px-1 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-300  peer-placeholder-shown:dark:white peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-white peer-focus:dark:text-white peer-focus:bg-dark-accent peer-focus:dark:bg-dark-accent peer-focus:px-1 peer-focus:text-xs">{label}</label>
            </div>
        </>
    )
}

export default FancyInput

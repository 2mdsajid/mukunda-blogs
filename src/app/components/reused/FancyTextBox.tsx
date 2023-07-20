import { TypeInputProps } from '@/utils/types'
import React from 'react'

const FancyTextBox = ({ value, setValueFunction, label }: TypeInputProps) => {
    return (
        <div className="my-4 relative">
            <textarea
                id={label}
                placeholder={label}
                value={value}
                onChange={(e) => setValueFunction(e.target.value)}
                required
                autoComplete='off'
                className="peer h-28 w-full bg-dark-accent  dark:bg-transparent border pl-3 pt-3 rounded-md placeholder-transparent focus:outline-none text-white shadow-md"
            ></textarea>
            <label htmlFor="message" className="absolute left-2 -top-2 text-white dark:text-dark-color1 bg-dark-accent dark:bg-dark-accent  px-1 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300  peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-white peer-focus:dark:text-white peer-focus:bg-dark-accent peer-focus:dark:bg-dark-accent peer-focus:px-1 peer-focus:text-xs">{label}</label>
        </div>
    )
}

export default FancyTextBox

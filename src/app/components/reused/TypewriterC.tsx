'use client'

import React from 'react'
import Typewriter from 'typewriter-effect';

const TypewriterC = ({texts}:{texts:string[]}) => {
    return (
        <Typewriter
            options={{
                strings: texts,
                autoStart: true,
                loop: true,
            }}
        />

    )
}

export default TypewriterC

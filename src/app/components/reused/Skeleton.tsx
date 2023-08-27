'use client'

import React from 'react'
import { Skeleton } from '@mui/material'

type TypeReusableSkeletonProps = {
    variant?: 'text' | 'rectangular' | 'rounded' | 'circular';
    width?: string;
    height?: number;
}
const ReusableSkeleton = (props: TypeReusableSkeletonProps) => {
    const { variant, width, height } = props
    return (
        <>
            <Skeleton sx={{fontSize: '1rem' }} variant={variant || 'rectangular'} width={width || 250} height={height || 150} animation='wave' />
        </>
    )
}

export default ReusableSkeleton

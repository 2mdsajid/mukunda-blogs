'use client'

import React, { useState } from 'react'
import Timer from './Timer'

const TimerComponent = () => {
    function calculateTimeDifference() {
        const now = new Date();
        const currentDay = now.getDay(); 
        const currentHour = now.getHours();
        const targetHour = 21; 
        const targetDay = 0;   

        if (currentDay === targetDay && currentHour === targetHour) {
            return 0; 
        }

        let daysUntilTargetDay = 0;

        if (currentDay === targetDay && currentHour >= targetHour) {
            daysUntilTargetDay = 7; 
        } else if (currentDay < targetDay || (currentDay === targetDay && currentHour < targetHour)) {
            daysUntilTargetDay = (targetDay + 7 - currentDay) % 7;
        }

        const targetDate = new Date(now);
        targetDate.setDate(targetDate.getDate() + daysUntilTargetDay);
        targetDate.setHours(targetHour, 0, 0, 0);

        const timeDifference = targetDate.getTime() - now.getTime();
        return timeDifference;
    }

    const timeleft = calculateTimeDifference()


    return (
        <div className='h-screen w-screen fixed z-50 top-0 right-0 flex flex-col justify-center items-center bg-gray-800'>
            <Timer
                expiryTimestamp={timeleft}
                onExpire={() => console.log('dfghj')}
            />
            <p>💣</p>
        </div>
    )
}

export default TimerComponent

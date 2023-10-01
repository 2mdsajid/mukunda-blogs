'use client'

import React, { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';

interface TestTimerProps {
    expiryTimestamp: number; // Time in milliseconds
    onExpire: () => void;
    onTick?: (remainingTime: number) => void; // Time in milliseconds
    className?: string;
}

function Timer({ expiryTimestamp, onExpire, onTick }: TestTimerProps): JSX.Element {
    function convertToTwoDigit(num: number): string {
        return num < 10 ? `0${num}` : `${num}`;
    }

    const currentDatetime = new Date();
    currentDatetime.setMilliseconds(currentDatetime.getMilliseconds() + expiryTimestamp);

    const [remainingTime, setRemainingTime] = useState<number>(0);

    const {
        days,
        seconds,
        minutes,
        hours,
    } = useTimer({ expiryTimestamp: currentDatetime, onExpire });

    useEffect(() => {
        setRemainingTime((hours * 3600 + minutes * 60 + seconds) * 1000);
        if (typeof onTick === 'function') {
            onTick(remainingTime);
        }
    }, [seconds, onTick, remainingTime]);

    return (
        <div>{days} Days : {convertToTwoDigit(hours)} hours : {convertToTwoDigit(minutes)} Min : {convertToTwoDigit(seconds)} Sec</div>
    );
}

export default Timer;

import React, { useEffect, useState } from 'react';

const now = new Date().getTime();

const Countdown = ({date}) => {
    const weddingTime = date.getTime();
    const timeUntilWedding = weddingTime - now;

    const [days, setDays] = useState(Math.floor(timeUntilWedding / (1000 * 60 * 60 * 24)));
    const [hours, setHours] = useState(Math.floor((timeUntilWedding % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const [minutes, setMinutes] = useState(Math.floor((timeUntilWedding % (1000 * 60 * 60)) / (1000 * 60)));
    const [seconds, setSeconds] = useState(Math.floor((timeUntilWedding % (1000 * 60)) / 1000));
    const timeValues = {days, hours, minutes, seconds};

    const [areMarried, setAreMarried] = useState(false);

    useEffect(()=>{
        const timer = setTimeout(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
                return;
            }
            if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
                return;
            }
            if (hours > 0) {
                setHours(hours - 1);
                setMinutes(59);
                setSeconds(59);
                return;
            }
            if (days > 0) {
                setDays(days - 1);
                setHours(23);
                setMinutes(59);
                setSeconds(59);
                return;
            }
            setAreMarried(true);
        }, 1000)
        return () => {
            clearTimeout(timer);
        }
    });

    if (!date) {
        return null;
    }

    const countdownString = () => {
        let string = '';
        for (const [key, val] of Object.entries(timeValues)) {
            string = string.concat(val !== 0 ? `${val} ${key} ` : '');
        }
        return string;
    }

    return (
        <div className="Countdown">
            {!areMarried && <h1>{countdownString()}</h1>}
            {areMarried && <h1>Happily Married! Thanks for sharing in our special day</h1>}
        </div>
    )
}

export default Countdown;
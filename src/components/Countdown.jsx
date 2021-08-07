import React, { useEffect, useState } from 'react';

const weddingTime = new Date("04/06/2023, 13:00").getTime();
const now = new Date().getTime();

const Countdown = () => {
    const timeUntilWedding = weddingTime - now;

    const [days, setDays] = useState(Math.floor(timeUntilWedding / (1000 * 60 * 60 * 24)));
    const [hours, setHours] = useState(Math.floor((timeUntilWedding % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const [minutes, setMinutes] = useState(Math.floor((timeUntilWedding % (1000 * 60 * 60)) / (1000 * 60)));
    const [seconds, setSeconds] = useState(Math.floor((timeUntilWedding % (1000 * 60)) / 1000));

    const [areMarried, setAreMarried] = useState([days, hours, minutes, seconds].every(val => val === 0))

    useEffect(()=>{
        const timer = setTimeout(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
                return;
            }
            if (minutes > 1) {
                setMinutes(minutes - 1);
                setSeconds(60);
                return;
            }
            if (hours > 1) {
                setHours(hours - 1);
                setMinutes(60);
                setSeconds(60);
                return;
            }
            if (days > 1) {
                setDays(days - 1);
                setHours(24);
                setMinutes(60);
                setSeconds(60);
                return;
            }
            setAreMarried(true);
        }, 1000)
        return () => {
            clearTimeout(timer);
        }
    });

    return (
        <div className="Countdown">
            {!areMarried && <h1>{`${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`}</h1>}
            {areMarried && <h1>Happily Married! Thanks for sharing in our special day</h1>}
        </div>
    )
}

export default Countdown;
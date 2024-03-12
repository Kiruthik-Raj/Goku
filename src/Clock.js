import { useState } from 'react';

function setClockTime()
{

    const [time, setTime] = new useState(new Date().toLocaleTimeString())
    function showClock()
    {
        setTime(
            new Date().toLocaleTimeString()
        )
    }


    setInterval(showClock, 1000)

    return (
        <p>Time is: {time}</p>
    )
}

export default setClockTime;
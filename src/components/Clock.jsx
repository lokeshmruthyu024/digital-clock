import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("Interval has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // clearInterval(intervalId);
    // console.log("Cancelled the Interval");
  }, [])
  return (
    <div>
      <p className='lead'> This is the current time {time.toDateString()} ~ {time.toLocaleTimeString()}
      </p>
    </div>
  )
}

export default Clock

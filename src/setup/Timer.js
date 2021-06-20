import React, {useState, useEffect} from 'react'
import indexCSS from './index.module.css'

const Timer = () => {

  let [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(()=>setDate(new Date()), 1000 )
    return function cleanup() {
        clearInterval(timer)
    }
  });

  return (
    <> 
      <div className={indexCSS.timeContainer}>
        <h2 className={indexCSS.time}>{date.toLocaleTimeString()}</h2>
      </div>
    </>
  );
}

export default Timer;

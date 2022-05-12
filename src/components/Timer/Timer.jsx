import React, { useState, useEffect } from 'react'
import "./Timer.scss";





 const Timer = ({startTime}) => {
    const [counter, setCounter] = useState(startTime);


    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);
    


      //Add in once game created
    //   if(counter = 0){
    //       end game
    //   }

  return (
    <h1 className='timer'>{counter}<span className='timer__s'>s</span></h1>
  )
}



export default Timer;

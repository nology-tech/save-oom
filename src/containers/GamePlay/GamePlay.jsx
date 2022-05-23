import React, { useEffect } from 'react'
import GameEnd from "../../pages/GameEnd/GameEnd"
import { useState } from 'react';


const GamePlay = () => {
  const [showComponent, setShowComponent] = useState(false);


  useEffect(() => {
    setInterval(()=> {
      setShowComponent(!showComponent);
    }, 60000)
  }, []);

  return (

    <section
     
    className='game-play'>
      <p>GameisPlaying</p>
      {showComponent && <GameEnd/>}
      

    </section>

  )
}

export default GamePlay;
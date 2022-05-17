import React from 'react'
import AvatarHeading from '../../components/AvatarHeading/AvatarHeading'
import Button from '../../components/Button/Button'
import NavBar from '../../containers/navBar/NavBar'
import './GameEnd.scss'

const GameEnd = () => {
  return (
    <div className='game-end'>
        <NavBar/>
        <div className='game-end__content'>
            <div className='game-end__content__top'>
                <p className='game-end__timer'>Time&apos;s up</p>
                <AvatarHeading avatarHeadingText={"Amazing effort Jack"} />
                <div className='game-end__buttons'>
                    <Button buttonStyle={"button-primary"} buttonText={"Back to Home"}/>
                    <Button buttonStyle={"button-primary"} buttonText={"Play Again"}/>
                </div>
            </div>
            <p className='game-end__score'>No. of correct sounds:</p>
        </div>
        
    </div>
  )
}

export default GameEnd
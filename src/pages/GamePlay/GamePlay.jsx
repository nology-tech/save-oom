import React from 'react';
import background from '../../assets/images/Frame 5backgroung.png';
import swingingOom from '../../assets/images/Group 146swingingOom.png';
import squirrel from '../../assets/images/squirrel.png';
import Button from '../../components/Button/Button';
// import ImageAnimated from '../../components/ImageAnimated/ImageAnimated';
import './GamePlay.scss';

const GamePlay = () => {
  const handleClick = () => {};

  return (
    <div className='game-play'>
      <div className='game-play__images'>
        <img
          className='game-play__background'
          src={background}
          alt='background'
        />
        <img
          className='animate__animated animate__bounce game-play__squirrel '
          src={squirrel}
          alt=''
        />
        <div className='game-play__button'>
          <Button
            onClick={handleClick}
            buttonText={'Play Animation'}
            buttonStyle={'button-primary'}
          />
        </div>

        <img
          className='animate__animated.animate__fast animate__swing game-play__oom '
          src={swingingOom}
          alt=''
        />
      </div>
    </div>
  );
};

export default GamePlay;

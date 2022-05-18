import React from 'react';
import background from '../../assets/images/Frame 5backgroung.png';
import swingingOom from '../../assets/images/Group 146swingingOom.png';
import squirrel from '../../assets/images/squirrel.png';
import AnimatedImage from '../../components/AnimatedImage/AnimatedImage';
import './GamePlay.scss';

const GamePlay = () => {
  return (
    <div className='game-play'>
      <div className='game-play__images'>
        <img
          className='game-play__background'
          src={background}
          alt='background'
        />

        <AnimatedImage
          imageToAnimate={squirrel}
          animationClass={'animate__animated'}
          animationType={'animate__bounce'}
          imageStylesClass={'game-play__squirrel'}
        />
        <AnimatedImage
          imageToAnimate={swingingOom}
          animationClass={'animate__animated.animate__fast'}
          animationType={'animate__swing'}
          imageStylesClass={'game-play__oom'}
        />
      </div>
    </div>
  );
};

export default GamePlay;

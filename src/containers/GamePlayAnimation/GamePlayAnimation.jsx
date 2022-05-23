import React from 'react';
import background from '../../assets/images/Frame 5backgroung.png';
import swingingOom from '../../assets/images/Group 146swingingOom.png';
import squirrel from '../../assets/images/squirrel.png';
import AnimatedImage from '../../components/AnimatedImage/AnimatedImage';
import './GamePlayAnimation.scss';

const GamePlayAnimation = () => {
  return (
    <div className='game-play-animation'>
      <div className='game-play-animation__images'>
        <img
          className='game-play-animation__background'
          src={background}
          alt='background'
        />

        <AnimatedImage
          imageToAnimate={squirrel}
          animationClass={'animate__animated'}
          animationType={'animate__bounce'}
          imageStylesClass={'game-play-animation__squirrel'}
        />
        <AnimatedImage
          imageToAnimate={swingingOom}
          animationClass={'animate__animated.animate__fast'}
          animationType={'animate__swing'}
          imageStylesClass={'game-play-animation__oom'}
        />
      </div>
    </div>
  );
};

export default GamePlayAnimation;

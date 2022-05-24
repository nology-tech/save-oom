import React from 'react';
import background from '../../assets/images/Frame 5backgroung.png';
import swingingOom from '../../assets/images/Group 146swingingOom.png';
import squirrel from '../../assets/images/squirrel.png';
import AnimatedImage from '../../components/AnimatedImage/AnimatedImage';
import './SwingGamePlay.scss';

const SwingGamePlay = () => {
  return (
    <div className='swing-game-play'>
      <div className='swing-game-play__images'>
        <img
          className='swing-game-play__background'
          src={background}
          alt='background'
        />

        <AnimatedImage
          imageToAnimate={squirrel}
          animationClass={'animate__animated'}
          animationType={'animate__bounce'}
          imageStylesClass={'swing-game-play__squirrel'}
        />
        <AnimatedImage
          imageToAnimate={swingingOom}
          animationClass={'animate__animated.animate__fast'}
          animationType={'animate__swing'}
          imageStylesClass={'swing-game-play__oom'}
        />
      </div>
    </div>
  );
};

export default SwingGamePlay;

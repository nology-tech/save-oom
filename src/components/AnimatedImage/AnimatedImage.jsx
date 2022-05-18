import React from 'react';
import './AnimatedImage.scss';

const AnimatedImage = ({
  imageToAnimate,
  animationClass,
  imageStylesClass,
}) => {
  return (
    <>
      <img
        className={`${animationClass} ${imageStylesClass} animate__animated`}
        src={imageToAnimate}
        alt='Animated Image'
      />
    </>
  );
};

export default AnimatedImage;

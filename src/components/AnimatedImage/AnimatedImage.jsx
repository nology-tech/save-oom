import React from "react";
import "./AnimatedImage.scss";

const AnimatedImage = ({
  imageToAnimate,
  animationClass,
  imageStylesClass,
  animationType,
}) => {
  return (
    <>
      <img
        className={`${animationClass} ${imageStylesClass} ${animationType}`}
        src={imageToAnimate}
        alt="Animated Image"
      />
    </>
  );
};

export default AnimatedImage;

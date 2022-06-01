import React from "react";
import "./AnimatedImage.scss";

const AnimatedImage = ({
  imageToAnimate,
  animationClass,
  imageStylesClass,
  animationType,
  keyId,
}) => {
  return (
    <>
      <img
        key={keyId}
        className={`${animationClass} ${imageStylesClass} ${animationType}`}
        src={imageToAnimate}
        alt="Animated Image"
      />
    </>
  );
};

export default AnimatedImage;

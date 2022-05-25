import React from "react";
import "./Button.scss";

const Button = ({ buttonText, buttonStyle, onClickEvent }) => {
  return (
    <button className={buttonStyle} onClick={onClickEvent}>
      {buttonText}
    </button>
  );
};

export default Button;

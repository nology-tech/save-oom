import React from "react";
import "./Button.scss";

const Button = ({ buttonText, buttonStyle, onClickEvent, type, name }) => {
  return (
    <button
      className={buttonStyle}
      onClick={onClickEvent}
      type={type}
      name={name}
    >
      {buttonText}
    </button>
  );
};

export default Button;

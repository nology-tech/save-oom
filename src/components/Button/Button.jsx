import React from "react";
import "./Button.scss";

const Button = ({ buttonText, buttonStyle, onClickEvent, type, name, onSubmit }) => {
  return (
    <button
      className={buttonStyle}
      onClick={onClickEvent}
      type={type}
      name={name}
      onSubmit={onSubmit}
    >
      {buttonText}
    </button>
  );
};

export default Button;

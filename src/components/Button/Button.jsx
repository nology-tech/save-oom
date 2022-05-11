import React from "react";
import "./Button.scss";

const Button = ({buttonText, buttonStyle, handleIncrement}) => {
   
  return <button onClick={handleIncrement} className={buttonStyle}>{buttonText}</button>;
};

export default Button;
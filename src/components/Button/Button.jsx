import React from "react";
import "./Button.scss";

const Button = ({buttonText, buttonStyle}) => {
   
  return <button className={buttonStyle}>{buttonText}</button>;
};

export default Button;
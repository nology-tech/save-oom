import React from "react";
import "./ValidateAnswerButtons.scss";
import cross from "../../assets/images/Cross.png";
import tick from "../../assets/images/Tick.png";

// add onClickEvent as a prop once buttons are being used
const ValidateAnswerButtons = ({handleCorrect, handleIncorrect}) => {
  return (
    <div className="validation">
      <button className="validation__button validation__button--wrong" onClick={handleIncorrect}><img src={cross} alt="cross" /></button>
      <button className="validation__button validation__button--right" onClick={handleCorrect}><img src={tick} alt="tick" /></button>
    </div>
  );
};

export default ValidateAnswerButtons;

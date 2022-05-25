import React from "react";
import "./GameInstructions.scss";
import Button from "../Button/Button";

const GameInstructions = ({ text }) => {
  return (
    <div className="gameInstructions">
      <p className="gameInstructions__text">{text}</p>
      <Button
        buttonText={"LET'S PLAY"}
        buttonStyle={"button-primary"}
        className="gameInstructions__button"
      />
    </div>
  );
};

export default GameInstructions;

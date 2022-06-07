import React from "react";
import "./GameInstructions.scss";
import Button from "../Button/Button";

const GameInstructions = () => {
  return (
    <div className="gameInstructions" role="text">
      <h1 className="gameInstructions__heading">HOW TO PLAY</h1>
      <ul className="gameInstructions__text">
        <li>
          A phoneme will appear on the screeen and the child will have
          to say the sound of the phoneme shown
        </li>
        <li>
          If the sound is said correctly, click the green button at the bottom
          right of the screen
        </li>
        <li>
          If the sound is not said correctly, click the red button at the bottom
          right of the screen
        </li>
        <li>
          The child will have 1 minute to say as many correct sounds as possible
        </li>
        <li>If the child needs help, click the squirrel to hear the sound</li>
      </ul>
      <Button
        buttonText={"LET'S PLAY"}
        buttonStyle={"button-primary"}
        className="gameInstructions__button"
      />
    </div>
  );
};

export default GameInstructions;

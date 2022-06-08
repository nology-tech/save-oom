import React from "react";
import AvatarHeading from "../../components/AvatarHeading/AvatarHeading";
import Button from "../../components/Button/Button";
import "./GameEnd.scss";

const GameEnd = ({score, childName}) => {
  return (
        <div className="game-end">
            <div className="game-end__top">
                <p className="game-end__timer">Time&apos;s up</p>
                <AvatarHeading avatarHeadingText={"Amazing effort " + childName} />
                <div className="game-end__buttons">
                    <Button buttonStyle={"button-primary"} buttonText={"Back to Home"}/>
                    <Button buttonStyle={"button-primary"} buttonText={"Play Again"}/>
                </div>
                <p className="game-end__score">No. of correct sounds: {score}</p>
            </div>
           
        
    </div>
  );
};

export default GameEnd;

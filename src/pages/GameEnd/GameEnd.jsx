import React from "react";
import { Link } from "react-router-dom";
import AvatarHeading from "../../components/AvatarHeading/AvatarHeading";
import Button from "../../components/Button/Button";
import "./GameEnd.scss";

const GameEnd = ({score, childName}) => {

  const refreshPage = () => {
    window.location.reload(false);
  }
    
  return (
        <div className="game-end">
            <div className="game-end__top">
                <p className="game-end__timer">Time&apos;s up</p>
                <AvatarHeading avatarHeadingText={"Amazing effort " + childName} />
                <div className="game-end__buttons">
                  <Link to="/level-select-card-container">
                    <Button buttonStyle={"button-primary"} buttonText={"Back to Home"}/>
                  </Link>
                 <Button buttonStyle={"button-primary"} buttonText={"Play Again"} onClickEvent={refreshPage}/>
                </div>
                <p className="game-end__score">No. of correct sounds: {score}</p>
            </div>
           
        
    </div>
  );
};

export default GameEnd;

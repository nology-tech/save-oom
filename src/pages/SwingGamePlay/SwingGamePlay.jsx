import React, { useState } from "react";
import swingingOom from "../../assets/images/Group 146swingingOom.png";
import squirrel from "../../assets/images/squirrel.png";
import AnimatedImage from "../../components/AnimatedImage/AnimatedImage";
import ValidateAnswerButtons from "../../components/ValidateAnswerButtons/ValidateAnswerButtons";
import PhonicComponent from "../../components/PhonicComponent/PhonicComponent";
import phonicsData from "../../data/phonicsData";
import GameEnd from "../GameEnd/GameEnd";
import "./SwingGamePlay.scss";
import Timer from "../../components/Timer/Timer";
import shortid from "shortid";
import OomsNeedsContainer from "../../containers/OomsNeedsContainer/OomsNeedsContainer";

let gameScore = 0;
const SwingGamePlay = () => {
  const [gameState, setGameState] = useState({
    score: 0,
    index: 0,
    isCorrect: false,
    isGameOver: false,
    counter: 0,
    percentage: 0,
  });

  const [hintAnimation, setHintAnimation] = useState(false);

  const phonicsArray = Object.keys(phonicsData.levelOne);

  const handleCorrect = () => {
    let newGameState = { ...gameState };
    newGameState.isCorrect = true;
    setHintAnimation(false);
    newGameState.score = newGameState.score + 1;
    gameScore = newGameState.score;
    newGameState.counter = newGameState.counter + 1;
    if (newGameState.percentage == 100) {
      newGameState.percentage + 0
    }else {
      newGameState.percentage += 5
    }
    newGameState.index = handleIndexChange();
    setGameState(newGameState);
    console.log(newGameState, gameState, "handleCorrect");
  };

  const handleIncorrect = () => {
    let newGameState = { ...gameState };
    newGameState.isCorrect = false;
    setHintAnimation(false);
    console.log(newGameState.isCorrect);
    newGameState.index = newGameState.index + 1;
    setGameState(newGameState);
    console.log(newGameState, gameState, "handleIncorrect");
  };

  const handleHint = () => {
    let newGameState = { ...gameState };
    setHintAnimation(true);
    newGameState.isCorrect = null;
    console.log(newGameState.isCorrect);
    newGameState.counter = newGameState.counter + 1;
    let audio = new Audio(
      phonicsData.levelOne[phonicsArray[gameState.index]].soundUrl
    );
    audio.play();
    setGameState(newGameState);
  };

  const handleIndexChange = () => {
    if (gameState.index < phonicsArray.length) {
      return gameState.index + 1;
    } else {
      return 0;
    }
  };

  const handleGameEnd = () => {
    let newGameState = { ...gameState };
    newGameState.isGameOver = true;
    setGameState(newGameState);
    console.log(newGameState, gameState, "handleGameEnd");
  };

  const getId = () => {
    const id = shortid.generate();
    console.log(id);
    return id;
  };

  const squirrelAnimationType2 = hintAnimation ? "animate__bounce" : "";
  const oomAnimationType = gameState.isCorrect ? "animate__swinging" : "";

  return (
    <div className="swing-game-play">
      {gameState.isGameOver ? (
        <GameEnd score={gameScore} />
      ) : (
        <>
          <OomsNeedsContainer percentage={gameState.percentage} />
          <div className="swing-game-play__phonic">
            <Timer startTime={60} handleGameEnd={handleGameEnd} />
            <PhonicComponent phonicText={phonicsArray[gameState.index]} />
          </div>

          <div onClick={handleHint}>
            <AnimatedImage
              key={getId()}
              imageToAnimate={squirrel}
              animationClass={"animate__animated"}
              animationType={` ${squirrelAnimationType2}`}
              imageStylesClass={"swing-game-play__squirrel"}
            />
          </div>
          <AnimatedImage
            key={getId()}
            imageToAnimate={swingingOom}
            animationClass={"animate__animated.animate__fastest"}
            animationType={oomAnimationType}
            imageStylesClass={"swing-game-play__oom"}
          />

          <ValidateAnswerButtons
            handleCorrect={handleCorrect}
            handleIncorrect={handleIncorrect}
          />

          <p className="swing-game-play__score">
            Number Of Correct Sounds: {gameState.score}
          </p>
        </>
      )}
    </div>
  );
};

export default SwingGamePlay;

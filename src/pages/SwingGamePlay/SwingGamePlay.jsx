import React, {useState} from 'react';
// import background from '../../assets/images/GameBackground.png';
import swingingOom from '../../assets/images/Group 146swingingOom.png';
import squirrel from '../../assets/images/squirrel.png';
import AnimatedImage from '../../components/AnimatedImage/AnimatedImage';
import ValidateAnswerButtons from "../../components/ValidateAnswerButtons/ValidateAnswerButtons";
import PhonicComponent from '../../components/PhonicComponent/PhonicComponent';
import phonicsData from "../../data/phonicsData";
import GameEnd from "../GameEnd/GameEnd";
import './SwingGamePlay.scss';
import Timer from '../../components/Timer/Timer';

let gameScore = 0;
const SwingGamePlay = () => {
  const [gameState, setGameState] = useState({score:0, index:0, isCorrect:false, isGameOver:false});

  const phonicsArray = Object.keys(phonicsData.levelOne);

  const handleCorrect = () => {
    let newGameState = {...gameState};
    newGameState.isCorrect = true;
    newGameState.score = newGameState.score + 1;
    gameScore = newGameState.score;
    newGameState.index = handleIndexChange();
    setGameState(newGameState);    
    console.log(newGameState, gameState, "handleCorrect");

  }
  
  const handleIncorrect = () => {
    let newGameState = {...gameState};
    // newGameState.isCorrect = false;
    newGameState.index = newGameState.index + 1;
    setGameState(newGameState);
    console.log(newGameState, gameState, "handleIncorrect");
  }

  const handleHint = () => {
    let newGameState = {...gameState};
    newGameState.isCorrect = false;
    let audio = new Audio(phonicsData.levelOne[phonicsArray[gameState.index]].soundUrl )
    audio.play()
    setGameState(newGameState);
  }
  
  const handleIndexChange = () => {
    if(gameState.index < phonicsArray.length) {
      return gameState.index + 1;
    } else {
      return 0;
    }
  }

  const handleGameEnd = () => {
    let newGameState = {...gameState};
    newGameState.isGameOver = true;
    setGameState(newGameState);
    console.log(newGameState, gameState, "handleGameEnd");
  }

  const squirrelAnimationType = gameState.isCorrect ? "" : 'animate__bounce';
  const oomAnimationType = gameState.isCorrect ? 'animate__swing' : "";

  console.log(squirrelAnimationType, oomAnimationType);
  
  return (
      <div className='swing-game-play'>
        {gameState.isGameOver? (
        <GameEnd score={gameScore}/>
        ) : (
        <div className='swing-game-play__images'>
          <div className='swing-game-play__phonic'>
            <Timer startTime={60} handleGameEnd={handleGameEnd}/>
            <PhonicComponent phonicText={phonicsArray[gameState.index]} />
          </div>
          <button onClick={handleHint}>
          <AnimatedImage
            imageToAnimate={squirrel}
            animationClass={"animate__animated"}
            animationType={squirrelAnimationType}
            imageStylesClass={'swing-game-play__squirrel'}
          />
          </button>
          <AnimatedImage
            imageToAnimate={swingingOom}
            animationClass={'animate__animated.animate__fast'}
            animationType={oomAnimationType}
            imageStylesClass={'swing-game-play__oom'}
          />
          <div className='swing-game-play__buttons'>
            <ValidateAnswerButtons handleCorrect={handleCorrect} handleIncorrect={handleIncorrect} />
          </div>  
          <p className='swing-game-play__score'>Number Of Correct Sounds: {gameState.score}</p>
             
           
        </div>
      )} 
      </div>
  );
};

export default SwingGamePlay;

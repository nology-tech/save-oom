import React, {useState, useEffect} from 'react';
import background from '../../assets/images/GameBackground.png';
import swingingOom from '../../assets/images/Group 146swingingOom.png';
import squirrel from '../../assets/images/squirrel.png';
import AnimatedImage from '../../components/AnimatedImage/AnimatedImage';
import ValidateAnswerButtons from "../../components/ValidateAnswerButtons/ValidateAnswerButtons";
import PhonicComponent from '../../components/PhonicComponent/PhonicComponent';
import phonicsData from "../../data/phonicsData";
import GameEnd from "../GameEnd/GameEnd";
import './SwingGamePlay.scss';

const SwingGamePlay = () => {
  const [gameState, setGameState] = useState({score:0, index:0, isCorrect:false, isGameOver:false});

  const phonicsArray = Object.keys(phonicsData.levelOne);

  const handleCorrect = () => {
    let newGameState = {...gameState};
    newGameState.isCorrect = true;
    newGameState.score = newGameState.score + 1;
    newGameState.index = handleIndexChange();
    setGameState(newGameState);
    console.log(newGameState, gameState, "handleCorrect");

  }
  
  const handleIncorrect = () => {
    let newGameState = {...gameState};
    newGameState.isCorrect = false;
    newGameState.index = newGameState.index + 1;
    setGameState(newGameState);
    console.log(newGameState, gameState, "handleIncorrect");
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
  }

  useEffect(() => {
    setInterval(()=> {
      handleGameEnd();
    }, 3000)
  }, []);

  const squirrelAnimationType = gameState.isCorrect ? "" : 'animate__bounce';
  const oomAnimationType = gameState.isCorrect ? 'animate__swing' : "";

  console.log(squirrelAnimationType, oomAnimationType);
  
  return (

    gameState.isGameOver? (
      <GameEnd />
      ) : (
    <div className='swing-game-play'>
      <div className='swing-game-play__images'>
        <img
          className='swing-game-play__background'
          src={background}
          alt='background'
        />
        <PhonicComponent phonicText={phonicsArray[gameState.index]} />
        <AnimatedImage
          imageToAnimate={squirrel}
          animationClass={"animate__animated"}
          animationType={squirrelAnimationType}
          imageStylesClass={'swing-game-play__squirrel'}
        />
        <AnimatedImage
          imageToAnimate={swingingOom}
          animationClass={"animate__animated.animate__fast"}
          animationType={oomAnimationType}
          imageStylesClass={'swing-game-play__oom'}
        />
        <p>No Of Correct Sounds:{gameState.score}</p>
        <ValidateAnswerButtons handleCorrect={handleCorrect} handleIncorrect={handleIncorrect} />     
      </div>
    </div>
    ) 
  );
};

export default SwingGamePlay;

import { useState } from "react";
import "./LevelSelectCardContainer.scss";
import LevelSelectCard from "../../components/LevelSelectCard/LevelSelectCard";
import Button from "../../components/Button/Button";


const LevelSelectCardContainer = ({ levelSelectData }) => {
  const cardContainerJsx = levelSelectData.map((card) => {
    const [buttonLock, setButtonLock] = useState(true);
    // const [imageLock, setImageLock] = useState();

    const activeButton = () => {
      if (card.isLocked == true) {
        setButtonLock(!buttonLock);
        // setImageLock(!imageLock);
        console.log("locked")
      } else {
        setButtonLock(buttonLock);
        // setImageLock(card.headingImg);
        console.log("unlocked")
      }
    };
    const unlockLevel = () => {
      if(card.isLocked == true) {
        setButtonLock(buttonLock) 
        card.buttonStyle="button-secondary"
        card.headingImg="none";
      } else {
        setButtonLock(!buttonLock)
        card.buttonStyle="button-primary"
      }
      console.log(buttonLock)
    }

    return (
      <>
      <LevelSelectCard
        key={card.heading}
        headingText={card.heading}
        headingImg={card.headingImg}
        paragraphText={card.paragraph}
        buttonText={card.buttonText}
        buttonStyle={card.buttonStyle}
        isLocked={card.isLocked}
        onClickEvent={activeButton} 
      />
       <Button buttonStyle={"button-primary"} buttonText={"unlock level"} onClickEvent={unlockLevel}/>
      </>
    );
  });

  return (
    <div className="levels">
      <h1 className="levels__heading">Levels</h1>
      <div className="levels__card-container">{cardContainerJsx}</div>
    </div>
  );
};

export default LevelSelectCardContainer;

import React from "react";
import "./LevelSelectCard.scss";
import NavBarHeading from "../navBarHeading/NavBarHeading";
import Button from "../Button/Button";


const LevelSelectCard = ({
  headingText,
  headingImg,
  paragraphText,
  buttonText,
  buttonStyle,
  isLocked,
  onClickEvent
}) => {


  return (
    <div className="level-select-card">
      <NavBarHeading
        headingText={headingText}
        headingImg={headingImg}
        headingStyle={"level-select"}
        isLocked={isLocked}
      />
      {/* <h3 className='card__heading'>{headingText}</h3> */}
      <p className="level-select-card__text">{paragraphText}</p>
      <div className="level-select-card__button">
        <Button buttonStyle={buttonStyle} buttonText={buttonText} onClickEvent={onClickEvent}/>
      </div>
    </div>
  );
};

export default LevelSelectCard;

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
    <div className="card">
      <NavBarHeading
        headingText={headingText}
        headingImg={headingImg}
        headingStyle={"level-select"}
        isLocked={isLocked}
      />
      {/* <h3 className='card__heading'>{headingText}</h3> */}
      <p className="card__text">{paragraphText}</p>
      <div className="card__button">
        <Button buttonStyle={buttonStyle} buttonText={buttonText} onClickEvent={onClickEvent}/>
      </div>
    </div>
  );
};

export default LevelSelectCard;

import React from "react";
import "./LevelSelectCardContainer.scss";
import LevelSelectCard from "../../components/LevelSelectCard/LevelSelectCard";

const LevelSelectCardContainer = ({ levelSelectData }) => {

  const cardContainerJsx = levelSelectData.map((card) => {
    return (
      <LevelSelectCard
        key={card.heading}
        headingText={card.heading}
        headingImg={card.headingImg}
        paragraphText={card.paragraph}
        buttonText={card.buttonText}
        buttonStyle={card.buttonStyle}
        isLocked={card.isLocked}
        path={card.path}
      />
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

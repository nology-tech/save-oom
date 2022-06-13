import "./StoryContainer.scss";
import { useNavigate } from 'react-router';

import React, { useState } from "react";
import StoryIntro from "../../components/StoryIntro/StoryIntro";
import Button from "../../components/Button/Button";
import storyData from "../../data/storyData";

const StoryContainer = () => {
  const [counter, setCounter] = useState(0);
  let navigate = useNavigate();

  const handleIncrement = () => {
    if (counter > 4) {
      navigate("/level-select-card-container");
    } else {
      setCounter(counter + 1);
    }
  };

  return (
    <div className="story__container">
      <StoryIntro text={storyData[counter].story} />
      <Button
        buttonStyle={"button-primary"}
        buttonText={"NEXT"}
        onClickEvent={handleIncrement}
      />
    </div>
  );
};

export default StoryContainer;

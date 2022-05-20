import "./StoryContainer.scss"
import React, { useState } from 'react'
import StoryIntro from "../../components/StoryIntro/StoryIntro"
import Button from "../../components/Button/Button"
import storyData from "../../data/storyData"

const StoryContainer = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if (counter >= 5) {
      setCounter(5)
    } else {
      setCounter(counter + 1)
    }
  }


  return (
    <div className="story__container">
      <StoryIntro text = {storyData[counter].story}/>
      <Button buttonStyle={"button-primary"} buttonText={"NEXT"} onClickEvent={handleIncrement}/>

    </div>
  )
}

export default StoryContainer
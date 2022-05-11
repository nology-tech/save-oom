import "./StoryContainer.scss"
import React from 'react'
import StoryIntro from "../../components/StoryIntro/StoryIntro"
import Button from "../../components/Button/Button"

const StoryContainer = () => {
  return (
    <div className="story__container">
      <StoryIntro />
      <Button buttonStyle={"button-primary"} buttonText={"NEXT"}/>

    </div>
  )
}

export default StoryContainer
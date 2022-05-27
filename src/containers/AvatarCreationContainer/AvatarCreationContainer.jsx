import React from "react";
import AvatarHeading from "../../components/AvatarHeading/AvatarHeading";
import Button from "../../components/Button/Button";
import "./AvatarCreationContainer.scss";
import TextInput from "../../components/TextInput/TextInput";
import { useState } from "react";
import avatarCreationData from "../../data/avatarCreationData";

const AvatarCreationContainer = () => {
  //use state for container - which changes upon an index value that changes with button click - and if page is exited resets

  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);

  const increment = () => {
    if (count >= 2) {
      setCount(2);
    } 
    else {
      setCount(count + 1);
    }

    if(count> 0 || count < 2){
      setShowText(!showText);
    } else {
      setShowText(showText);
    }
    
  };



  return (
    <div className="avatar-creation-container">
      <AvatarHeading avatarHeadingText={avatarCreationData[count].title} />
      <div className="avatar-creation-container__text">
      {showText ? <TextInput /> : null}
      </div>
      <Button
        buttonStyle={"button-primary"}
        buttonText={avatarCreationData[count].buttonText}
        onClickEvent={increment}
      />
    </div>
  );
};

export default AvatarCreationContainer;

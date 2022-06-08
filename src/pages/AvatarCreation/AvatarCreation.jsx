import React from "react";
import AvatarHeading from "../../components/AvatarHeading/AvatarHeading";
import Button from "../../components/Button/Button";
import "./AvatarCreation.scss";
import TextInput from "../../components/TextInput/TextInput";
import { useState } from "react";
import avatarCreationData from "../../data/avatarCreationData";
import { useNavigate } from "react-router-dom";

const AvatarCreation = () => {
  //use state for container - which changes upon an index value that changes with button click - and if page is exited resets

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const increment = () => {
    if (count >= 2) {
      setCount(2);
      navigate("/story-container");
    } 
    else {
      setCount(count + 1);
    }
    };
    const handleName = (e) => {
      setName(e.target.value)
    }

    const headerText = (avatarCreationData[count].appendName ? name: " " )+ avatarCreationData[count].title

  


  return (
    <div className="avatar-creation-container" role="ACC">
      <AvatarHeading avatarHeadingText={headerText} role="avatar_heading"/>
      <div className="avatar-creation-container__text">
      {/* {showText ? <TextInput /> : null} */}
      {avatarCreationData[count].inputBox  && <TextInput onChangeEvent={handleName}/> }

      </div>
      <Button
        buttonStyle={"button-primary"}
        buttonText={avatarCreationData[count].buttonText}
        onClickEvent={increment}
      />
    </div>
  );
};

export default AvatarCreation;


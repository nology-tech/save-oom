import React from "react";
import NavBar from "../../containers/navBar/NavBar";
import "./AvatarCreation.scss";
import AvatarCreationContainer from "../../containers/AvatarCreationContainer/AvatarCreationContainer";

const AvatarCreation = () => {
  return (
    <div className="avatar-creation">
        <NavBar />
        <AvatarCreationContainer />
    </div>
  );
};

export default AvatarCreation;

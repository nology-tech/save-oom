import React from "react";
import NavBar from "../../containers/navBar/NavBar";
import Layout from "../../components/Layout/Layout";
import background from "../../assets/images/background.png";
import AvatarHeading from "../../components/AvatarHeading/AvatarHeading";
import Button from "../../components/Button/Button";

import "./AvatarCreation.scss";

// use state for container - which changes upon an index value that changes with button click - and if page is exited resets

const AvatarCreation = () => {
  return (
    <>
      <div className="avatarCreation">
        <Layout>
          <NavBar className="avatarCreation__navBar" />
          <img className="avatarCreation__background" src={background} alt="backgroundImage" />
          <div className="avatarCreation__containerOne">
            <AvatarHeading avatarHeadingText={"Please add an avatar to save oom"} />
            <Button buttonStyle={"button-primary"} buttonText="Add Avatar" />
          </div>
        </Layout>
      </div>
    </>
  );
};

export default AvatarCreation;

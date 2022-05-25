import React from "react";
import "./AvatarHeading.scss";

const AvatarHeading = ({ avatarHeadingText, headingStyle }) => {
  return (
    <div className="avatar-heading">
      <h1 className={headingStyle}>{avatarHeadingText}</h1>
    </div>
  );
};

export default AvatarHeading;

import React from "react";
import "./StoryIntro.scss";

const StoryIntro = ({ text }) => {
  return (
    <div className="intro">
      <p className="intro__paragraph">{text}</p>
    </div>
  );
};

export default StoryIntro;

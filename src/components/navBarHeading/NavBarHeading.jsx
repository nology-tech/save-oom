import React from "react";
import "./NavBarHeading.scss";

const NavBarHeading = ({ headingText, headingImg, headingStyle, isLocked }) => {
  return (
    <div className={`${headingStyle}-header`}>
      <h2 className={`${headingStyle}-header__heading`}>{headingText}</h2>
      {isLocked && (
        <img
          className={`${headingStyle}-header__img`}
          src={headingImg}
          alt={headingText}
        />
      )}
    </div>
  );
};

export default NavBarHeading;

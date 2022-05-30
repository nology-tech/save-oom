import React from "react";
import "./PopUp.scss";

const PopUp = ({ togglePopUp, content }) => {
  return (
    <div role="Popup"  className="popup-box">
      <div className="box">
        <div className="popup-box__content">
        <span className="close-icon" onClick={togglePopUp}>x</span>
          <h1>{content}</h1>
        </div>
      </div>
    </div>
  );
};

export default PopUp;

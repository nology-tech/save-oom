import React from "react";
import "./OomsNeeds.scss";

const OomsNeeds = ({ oomsNeed, percentage }) => {



  return (
    <>
      <div className="needs">
        <div className="needs__image-div">
          <img className="needs__image" src={oomsNeed} alt="ooms needs" />

        </div>

      </div>
      <p className="needs__percentage">{percentage}%</p>

    </>
  );
};

export default OomsNeeds;

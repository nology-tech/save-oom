import React from "react";
import OomsNeeds from "../../components/OomsNeeds/OomsNeeds";
import "./OomsNeedsContainer.scss";
import battery0 from "../../assets/images/Battery-0.svg";
import battery20 from "../../assets/images/Battery-20.svg";
import smiley from "../../assets/images/Smiley.svg";

const OomsNeedsContainer = () => {
  return (
    <div className="oomsneeds-container">
      <OomsNeeds oomsNeed={battery0} percentage={0} />
      <OomsNeeds oomsNeed={smiley} percentage={90} />
      <OomsNeeds oomsNeed={battery20} percentage={20} />
    </div>
  );
};

export default OomsNeedsContainer;

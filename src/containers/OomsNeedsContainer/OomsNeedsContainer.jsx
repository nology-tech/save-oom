import React from 'react';
import OomsNeeds from '../../components/OomsNeeds/OomsNeeds';
import './OomsNeedsContainer.scss';
import battery0 from '../../assets/images/Battery-0.svg';
import battery20 from '../../assets/images/Battery-20.svg';
import smiley from '../../assets/images/Smiley.svg';

const OomsNeedsContainer = ({percentage}) => {
  return (
    <div className="oomsneeds-container">
      <OomsNeeds oomsNeed={battery0} percentage={percentage} />
      <OomsNeeds oomsNeed={smiley} percentage={percentage} />
      <OomsNeeds oomsNeed={battery20} percentage={percentage} />
    </div>
  );
};

export default OomsNeedsContainer;

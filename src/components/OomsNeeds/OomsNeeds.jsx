import React from 'react';
import './OomsNeeds.scss';

const OomsNeeds = ({ oomsNeed, percentage }) => {
  return (
    <div className='needs'>
      <img src={oomsNeed} alt='ooms needs' className='needs__image' />
      <p className='needs__percentage'>{percentage}%</p>
    </div>
  );
};

export default OomsNeeds;

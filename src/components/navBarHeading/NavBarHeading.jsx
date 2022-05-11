import React from 'react';
import './NavBarHeading.scss';

const NavBarHeading = ({ headingText, headingImg }) => {
  return (
    <div className='nav-bar-header'>
      <h2 className='nav-bar-header__heading'>{headingText}</h2>
      <img className='nav-bar-header__img' src={headingImg} alt={headingText} />
    </div>
  );
};

export default NavBarHeading;

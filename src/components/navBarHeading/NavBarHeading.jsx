import React from 'react';
import './NavBarHeading.scss';
import vector from '../../assets/Vectorvector.png';

const NavBarHeading = () => {
  return (
    <div className='nav-bar'>
      <h2 className='nav-bar__heading'>Phonics stage</h2>
      <img className='nav-bar__img' src={vector} alt='vector img' />
    </div>
  );
};

export default NavBarHeading;

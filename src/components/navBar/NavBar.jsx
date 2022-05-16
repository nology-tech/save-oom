import React from 'react';
import './NavBar.scss';
import NavBarHeading from '../navBarHeading/NavBarHeading';
import vector from '../../assets/images/Vectorvector.png';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import lockImg from '../../assets/images/Vectorlock.png';
import statImg from '../../assets/images/Vectorstat.png';
import addImg from '../../assets/images/Vectoradd.png';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <div className='nav-bar__section'>
        <Logo />
        <NavBarHeading headingText={'Phonics stages'} headingImg={vector} headingStyle={"nav-bar"}/>
        <h2>Introduction</h2>
        <NavBarHeading headingText={'Level 1'} headingImg={lockImg} headingStyle={"nav-bar"} />
        <NavBarHeading headingText={'Level 2'} headingImg={lockImg} headingStyle={"nav-bar"} />
        <NavBarHeading headingText={'Level 3'} headingImg={lockImg} headingStyle={"nav-bar"} />
        <NavBarHeading headingText={'Stats'} headingImg={statImg} headingStyle={"nav-bar"} />
        <h2>Jack</h2>
        <NavBarHeading headingText={'Add Avatar'} headingImg={addImg} headingStyle={"nav-bar"}/>
      </div>
      <Button buttonText={'Logout'} buttonStyle={'button-logout'} />
    </div>
  );
};

export default NavBar;

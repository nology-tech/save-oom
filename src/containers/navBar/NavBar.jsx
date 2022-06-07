import React, { useContext } from "react";
import "./NavBar.scss";
import NavBarHeading from "../../components/navBarHeading/NavBarHeading";
import vector from "../../assets/images/Vectorvector.png";
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import lockImg from "../../assets/images/Vectorlock.png";
import statImg from "../../assets/images/Vectorstat.png";
import addImg from "../../assets/images/Vectoradd.png";
import UserContext from "../../contexts/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
const NavBar = () => {
  let currentUserName;
  try {
    const { user } = useContext(UserContext);
    currentUserName = user.name;
  } catch {
    currentUserName = "";
  }

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar__section">
        <Logo />
        <NavBarHeading
          headingText={"Phonics stages"}
          headingImg={vector}
          headingStyle={"nav-bar"}
        />
        <h2>Introduction</h2>
        <NavBarHeading
          headingText={"Level 1"}
          headingImg={lockImg}
          headingStyle={"nav-bar"}
        />
        <NavBarHeading
          headingText={"Level 2"}
          headingImg={lockImg}
          headingStyle={"nav-bar"}
        />
        <NavBarHeading
          headingText={"Level 3"}
          headingImg={lockImg}
          headingStyle={"nav-bar"}
        />
        <NavBarHeading
          headingText={"Stats"}
          headingImg={statImg}
          headingStyle={"nav-bar"}
        />
        <h2>{currentUserName}</h2>
        <NavBarHeading
          headingText={"Add Avatar"}
          headingImg={addImg}
          headingStyle={"nav-bar"}
        />
      </div>
      <Button
        buttonText={"Logout"}
        buttonStyle={"button-logout"}
        onClickEvent={logout}
      />
    </div>
  );
};

export default NavBar;

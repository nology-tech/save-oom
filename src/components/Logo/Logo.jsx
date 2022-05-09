import React from "react";
import logo from "../../assets/images/logo.png";
import "./Logo.scss";

// will need if statements akin to button on beatles album projects, with an if statement and primary/secondary usage

const Logo = () => {
  return <img src={logo} alt="Logo image" className="logo__image"></img>;
};

export default Logo;

import React from "react";
import { useState } from "react";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Logo from "../../components/Logo/Logo";
import TextInput from "../../components/TextInput/TextInput";
import "./Registration.scss";
import PopUp from "../../components/PopUp/PopUp";

const Registration = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const regMessage = (event) => {
    event.preventDefault();
    console.log("working");
    setShowPopUp(!showPopUp);
  };
  return (
    <>
      <Layout>
        <div className="registration">
          <div className="registration__image">
            <Logo />
          </div>
          <form className="registration__container">
            {showPopUp && (
              <PopUp togglePopUp={regMessage} content={"registered"} />
            )}
            <h1 className="registration__heading">Create your account</h1>
            <p className="registration__top-text">
              This is the registration page
            </p>
            <TextInput
              className="registration__input"
              labelText={"First Name"}
            />
            <TextInput
              className="registration__input"
              labelText={"Email Address"}
            />
            <TextInput className="registration__input" labelText={"Password"} />
            <Button
              className="registration__button"
              buttonText={"Create your account"}
              buttonStyle={"button-secondary"}
              onClickEvent={regMessage}
            />
            <p className="registration__bottom-text">
              Already have an account?{" "}
              <a className="registration__link" href="../LogIn/LogIn.jsx">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Registration;

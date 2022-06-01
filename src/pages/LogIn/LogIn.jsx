import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Logo from "../../components/Logo/Logo";
import TextInput from "../../components/TextInput/TextInput";
import "./LogIn.scss";
// import PopUp from "../../components/PopUp/PopUp";

const LogIn = () => {
  const [showPopUp, setShowPopUp] = useState(false);


  const loginMessage = (event) => {

      event.preventDefault();
      console.log("working");
      setShowPopUp(!showPopUp);  

  };

  const handleSubmit = (e) => {
    e.prevent.default();
    console.log('it works!');
  };

  return (
    <>
      <Layout>
        <div className="log-in">
          <div className="log-in__image">
            <Logo />
          </div>
          <form className="log-in__container" onSubmit={handleSubmit}>
            {/* {showPopUp && (
              <PopUp togglePopUp={loginMessage} content={"logged in"} />
            )} */}
            <h1 className="log-in__heading">Welcome!</h1>
            <p className="log-in__top-text">This is the log in page</p>
            <TextInput className="log-in__input" labelText={"Email"} inputType="email" />
            <TextInput className="log-in__input" labelText={"Password"} inputType="password"/>
            <Button
              className="log-in__button"
              buttonText={"Log in"}
              buttonStyle={"button-secondary"}
              onClickEvent={loginMessage}
            />
            <p className="log-in__bottom-text">
              Don&apos;t have an Account?{" "}
              <a
                className="log-in__registration-link"
                href="../Registration/Registration.jsx"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default LogIn;

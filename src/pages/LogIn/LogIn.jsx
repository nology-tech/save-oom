import React from "react";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Logo from "../../components/Logo/Logo";
import TextInput from "../../components/TextInput/TextInput";
import "./LogIn.scss";

const LogIn = () => {
  return (
    <>
      <Layout>
        <div className="logIn">
          <div className="logIn__image">
            <Logo />
          </div>
          <form className="logIn__container">
            <h1 className="logIn__heading">Welcome!</h1>
            <p className="logIn__topText">This is the log in page</p>
            <TextInput className="logIn__input" labelText={"Email"} />
            <TextInput className="logIn__input" labelText={"Password"} />
            <Button className="logIn__button" buttonText={"Log in"} buttonStyle={"button-secondary"} />
            <p className="logIn__bottomText">
              Don&apos;t have an Account?{" "}
              <a className="logIn__registrationLink" href="../Registration/Registration.jsx">
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

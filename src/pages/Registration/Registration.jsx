import React from "react";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Logo from "../../components/Logo/Logo";
import TextInput from "../../components/TextInput/TextInput";
import "./Registration.scss";

const Registration = () => {
  return (
    <>
      <Layout>
        <div className="registration">
          <div className="registration__image">
            <Logo />
          </div>
          <form className="registration__container">
            <h1 className="registration__heading">Create your account</h1>
            <p className="registration__topText">This is the registration page</p>
            <TextInput className="registration__input" labelText={"First Name"} />
            <TextInput className="registration__input" labelText={"Email Address"} />
            <TextInput className="registration__input" labelText={"Password"} />
            <Button className="registration__button" buttonText={"Create your account"} buttonStyle={"button-secondary"} />
            <p className="registration__bottomText">
              Already have an account?{" "}
              <a className="registration__registrationLink" href="../LogIn/LogIn.jsx">
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

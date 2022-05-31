import React from "react";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Logo from "../../components/Logo/Logo";
import { Link } from "react-router-dom";
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
            />
            <p className="registration__bottom-text">
              Already have an account?{" "}
              <Link className="registration__link" to="/">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Registration;

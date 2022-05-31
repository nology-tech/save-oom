import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Logo from "../../components/Logo/Logo";
import TextInput from "../../components/TextInput/TextInput";
import "./LogIn.scss";

const LogIn = () => {
  
  return (

    <>
      <Layout>
        <div className="log-in">
          <div className="log-in__image">
            <Logo />
          </div>
          <form className="log-in__container">
            <h1 className="log-in__heading">Welcome!</h1>
            <p className="log-in__top-text">This is the log in page</p>
            <TextInput className="log-in__input" labelText={"Email"} />
            <TextInput className="log-in__input" labelText={"Password"} />
            <Button
              className="log-in__button"
              buttonText={"Log in"}
              buttonStyle={"button-secondary"}
            />
            <p className="log-in__bottom-text">
              Don&apos;t have an Account?{" "}
              <Link to="/registration" className="log-in__registration-link">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </Layout>
    </>

  );
};

export default LogIn;


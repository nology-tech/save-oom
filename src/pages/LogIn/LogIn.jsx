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
        <div className="LogIn">
          <div className="LogIn__Image">
            <Logo />
          </div>
          <div className="LogIn__Container">
            <h1 className="LogIn__Heading">Welcome!</h1>
            <p className="LogIn__TopText">This is the log in page</p>
            <TextInput className="LogIn__Input" labelText={"Email"} />
            <TextInput className="LogIn__Input" labelText={"Password"} />
            <Button className="LogIn__Button" buttonText={"Log in"} buttonStyle={"button-secondary"} />
            <p className="LogIn__BottomText">
              Don&apos;t have an Account?{" "}
              <a className="LogIn__RegistrationLink" href="../Registration/Registration.jsx">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LogIn;

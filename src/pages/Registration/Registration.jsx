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
        <div className="Registration">
          <div className="Registration__Image">
            <Logo />
          </div>
          <div className="Registration__Container">
            <h1 className="Registration__Heading">Create your account</h1>
            <p className="Registration__TopText">This is the registration page</p>
            <TextInput className="Registration__Input" labelText={"First Name"} />
            <TextInput className="Registration__Input" labelText={"Email Address"} />
            <TextInput className="Registration__Input" labelText={"Password"} />
            <Button className="Registration__Button" buttonText={"Create your account"} buttonStyle={"button-secondary"} />
            <p className="Registration__BottomText">
              Already have an account?{" "}
              <a className="Registration__RegistrationLink" href="../LogIn/LogIn.jsx">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Registration;

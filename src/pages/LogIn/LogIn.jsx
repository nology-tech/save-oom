import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Logo from "../../components/Logo/Logo";
import TextInput from "../../components/TextInput/TextInput";
import "./LogIn.scss";
//authentication imports
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const LogIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    console.log(auth, loginEmail, loginPassword);

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
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
            <TextInput
              className="log-in__input"
              labelText={"Email"}
              onChangeEvent={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
            <TextInput
              className="log-in__input"
              labelText={"Password"}
              onChangeEvent={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
            <Button
              className="log-in__button"
              buttonText={"Log in"}
              buttonStyle={"button-secondary"}
              onClickEvent={login}
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

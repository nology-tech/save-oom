import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Logo from "../../components/Logo/Logo";
import TextInput from "../../components/TextInput/TextInput";
import "./LogIn.scss";
<<<<<<< HEAD
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

=======
//authentication imports
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";

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
  
>>>>>>> 0b4b1bff148d6c468e65373d0a36e32f94100b0d
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
<<<<<<< HEAD
            <TextInput className="log-in__input" labelText={"Email"} inputType="email" />
            <TextInput className="log-in__input" labelText={"Password"} inputType="password"/>
=======
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
>>>>>>> 0b4b1bff148d6c468e65373d0a36e32f94100b0d
            <Button
              className="log-in__button"
              buttonText={"Log in"}
              buttonStyle={"button-secondary"}
<<<<<<< HEAD
              onClickEvent={loginMessage}
=======
              onClickEvent={login}
>>>>>>> 0b4b1bff148d6c468e65373d0a36e32f94100b0d
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


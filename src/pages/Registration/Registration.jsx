<<<<<<< HEAD
import React from "react";
import { useState } from "react";
=======
import React, { useState } from "react";
>>>>>>> 0b4b1bff148d6c468e65373d0a36e32f94100b0d
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Logo from "../../components/Logo/Logo";
import { Link } from "react-router-dom";
import TextInput from "../../components/TextInput/TextInput";
import "./Registration.scss";
<<<<<<< HEAD
import PopUp from "../../components/PopUp/PopUp";

const Registration = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const regMessage = (event) => {
    event.preventDefault();
    console.log("working");
    setShowPopUp(!showPopUp);
  };
=======
//authentication imports
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
import { auth, createUser } from "../../firebase";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log(user)
  });

  const register = async (e) => {
    e.preventDefault();
    console.log(auth, firstName, registerEmail, registerPassword);
    const user = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    )
    await createUser(user.user.uid, "parentName", firstName)
    setUser(
      {
        parentName: firstName,
        userId: user.user.uid,
      }
    )
  };

>>>>>>> 0b4b1bff148d6c468e65373d0a36e32f94100b0d
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
              onChangeEvent={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <TextInput
              className="registration__input"
              labelText={"Email Address"}
              onChangeEvent={(e) => {
                setRegisterEmail(e.target.value);
              }}
            />
            <TextInput
              className="registration__input"
              labelText={"Password"}
              onChangeEvent={(e) => {
                setRegisterPassword(e.target.value);
              }}
            />

            <Button
              className="registration__button"
              buttonText={"Create your account"}
              buttonStyle={"button-secondary"}
<<<<<<< HEAD
              onClickEvent={regMessage}
=======
              onClickEvent={register}
>>>>>>> 0b4b1bff148d6c468e65373d0a36e32f94100b0d
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

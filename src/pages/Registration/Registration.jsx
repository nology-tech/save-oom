import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Logo from "../../components/Logo/Logo";
import { Link } from "react-router-dom";
import TextInput from "../../components/TextInput/TextInput";
import "./Registration.scss";
//authentication imports
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
import { auth, createUser } from "../../firebase";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const userContext  = useContext(UserContext)

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    userContext.setUser(user)
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
            <Link className = "registration__avatar-link" to="/avatar-creation">
              <Button
                className="registration__button"
                buttonText={"Create your account"}
                buttonStyle={"button-secondary button-login-signup"}
                onClickEvent={register}
              />
            </Link>
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

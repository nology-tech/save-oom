import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import Logo from "../../components/Logo/Logo";
import TextInput from "../../components/TextInput/TextInput";
import "./LogIn.scss";
//authentication imports
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { getUserById } from "../../utils/firebaseGameUtils";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

const LogIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const userContext = useContext(UserContext)

  console.log(userContext)
  const login = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      const fbUser = await getUserById(user.user.uid);
      console.log(user)
      const currentUser = {
        userId: user.user.uid,
        name: fbUser.data() && fbUser.data().name ? fbUser.data().name : user.user.email 
      }
      console.log("currentUser", currentUser)
      console.log("userContext", userContext)
      console.log("fbUser", fbUser.data())
      userContext.setUser(currentUser)
      console.log(userContext.user)
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


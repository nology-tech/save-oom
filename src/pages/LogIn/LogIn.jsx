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
import { getArrayForSwing } from "../../utils/gameUtils";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

const LogIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showValue, setShowValue] = useState("");
  const userContext  = useContext(UserContext)

  console.log(userContext)
  const login = async (e) => {
    e.preventDefault();
    console.log(showValue);

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

      const staticArray = await getArrayForSwing(currentUser.userId, 1);
      console.log("array for using in game", staticArray)

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
          <form className="log-in__container" onSubmit={login}>
            <h1 className="log-in__heading">Welcome!</h1>
            <p className="log-in__top-text">This is the log in page</p>
            <TextInput
              className="log-in__input"
              labelText={"Email"}
              onChangeEvent={(event) => {
                setShowValue(event.target.value);
                setLoginEmail(event.target.value);
              }}
              inputType="email"
            />
            <TextInput
              className="log-in__input"
              labelText={"Password"}
              onChangeEvent={(event) => {
                setLoginPassword(event.target.value);
              }}
              inputType="password"
            />
            <Button
              className="log-in__button"
              buttonText={"Log in"}
              buttonStyle={"button-secondary"}
              type="submit"
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


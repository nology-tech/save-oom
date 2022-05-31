import React, { useEffect,useContext } from "react";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../containers/navBar/NavBar";
import SwingGamePlay from "../SwingGamePlay/SwingGamePlay";
import UserContext from "../../contexts/UserContext";
import "./Home.scss";
import {
  getCorrectGameRoundsForUser,
  getIncorrectGameRoundsForUser,
  getArrayOfRounds,
} from "../../utils/firebaseGameUtils";

const Home = () => {
  getArrayOfRounds("dumbo", "swing", getCorrectGameRoundsForUser)
    .then((res) => console.log(res))
    .catch();
  getArrayOfRounds("dumbo", "swing", getIncorrectGameRoundsForUser).then(
    (res) => console.log(res)
  );

  const userObj = {
    name: "Jack",
    id: "UserId1",
    email: "jack@gamil.com",
  };
  console.log(userObj);
  const { user, setUser } = useContext(UserContext);
  console.log(user);

  useEffect(() => {
    setUser(userObj);
  }, []);

  return (
    <>
      <Layout>
        <NavBar />
        <SwingGamePlay />
      </Layout>
    </>
  );
};

export default Home;

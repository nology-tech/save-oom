import React from "react";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../containers/navBar/NavBar";
import "./Home.scss";
import {
  getCorrectGameRoundsForUser,
  getIncorrectGameRoundsForUser,
  getArrayOfRounds,
} from "../../utils/firebaseGameUtils";
import SwingGamePlay from "../SwingGamePlay/SwingGamePlay";

const Home = () => {
  //   const currentRound = {
  //     isCorrect: true,
  //     gameId: "swing",
  //     score: 6
  //    }
  // saveUserRound("dumbo","swing", 1 , currentRound, "g")
  //   .then(res => console.log(res + "success!"))
  //   .catch(res => res + "nope")

  getArrayOfRounds("dumbo", "swing",1, getCorrectGameRoundsForUser)
    .then((res) => console.log(res))
    .catch();
  getArrayOfRounds("dumbo", "swing",1, getIncorrectGameRoundsForUser).then(
    (res) => console.log(res)
  );

  return (
    <>
      <Layout>
        <NavBar />
        <SwingGamePlay/>
      </Layout>
    </>
  );
};

export default Home;

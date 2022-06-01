import React from "react";
import Layout from "../../components/Layout/Layout";
import LogIn from "../LogIn/LogIn";
import "./Home.scss";
// import {
//   getCorrectGameRoundsForUser,
//   getIncorrectGameRoundsForUser,
//   getArrayOfRounds,
// } from "../../utils/firebaseGameUtils";

const Home = () => {
  //   const currentRound = {
  //     isCorrect: true,
  //     gameId: "swing",
  //     score: 6
  //    }
  // saveUserRound("dumbo","swing", 1 , currentRound, "g")
  //   .then(res => console.log(res + "success!"))
  //   .catch(res => res + "nope")

  // getArrayOfRounds("dumbo", "swing", getCorrectGameRoundsForUser)
  //   .then((res) => console.log(res))
  //   .catch();
  // getArrayOfRounds("dumbo", "swing", getIncorrectGameRoundsForUser).then(
  //   (res) => console.log(res)
  // );

  return (

      <Layout>
        <LogIn/>
      </Layout>

  );
};

export default Home;





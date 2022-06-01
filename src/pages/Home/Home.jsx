import React from "react";
import Layout from "../../components/Layout/Layout";
<<<<<<< HEAD
import LogIn from "../LogIn/LogIn";
import "./Home.scss";
// import {
//   getCorrectGameRoundsForUser,
//   getIncorrectGameRoundsForUser,
//   getArrayOfRounds,
// } from "../../utils/firebaseGameUtils";
=======
import NavBar from "../../containers/navBar/NavBar";
import SwingGamePlay from "../SwingGamePlay/SwingGamePlay";
import StoryContainer from "../StoryContainer/StoryContainer";
import LevelSelectCardContainer from "../../containers/LevelSelectCardContainer/LevelSelectCardContainer";
import GameInstructions from "../../components/GameInstructions/GameInstructions"
import StatsPage from "../../pages/StatsPage/StatsPage"
import "./Home.scss";
import {
  getCorrectGameRoundsForUser,
  getIncorrectGameRoundsForUser,
  getArrayOfRounds,
} from "../../utils/firebaseGameUtils";
import { Route, Routes } from "react-router-dom";
import levelSelectData from "../../data/levelSelectData"
//import { useNavigate } from 'react-router';
//const loggedIn = false
>>>>>>> 0b4b1bff148d6c468e65373d0a36e32f94100b0d

const Home = () => {
  //   const currentRound = {
  //     isCorrect: true,
  //     gameId: "swing",
  //     score: 6
  //    }
  // saveUserRound("dumbo","swing", 1 , currentRound, "g")
  //   .then(res => console.log(res + "success!"))
  //   .catch(res => res + "nope")
<<<<<<< HEAD

  // getArrayOfRounds("dumbo", "swing", getCorrectGameRoundsForUser)
  //   .then((res) => console.log(res))
  //   .catch();
  // getArrayOfRounds("dumbo", "swing", getIncorrectGameRoundsForUser).then(
  //   (res) => console.log(res)
  // );
=======
  //let navigate = useNavigate();
  getArrayOfRounds("dumbo", "swing", getCorrectGameRoundsForUser)
    .then((res) => console.log(res))
    .catch();
  getArrayOfRounds("dumbo", "swing", getIncorrectGameRoundsForUser).then(
    (res) => console.log(res)
  );
  //if (!loggedIn) navigate("/login")
>>>>>>> 0b4b1bff148d6c468e65373d0a36e32f94100b0d

  return (

      <Layout>
<<<<<<< HEAD
        <LogIn/>
=======
        <NavBar />
        <Routes>
          <Route path="/swing-gamePlay" element={<SwingGamePlay />} />
          <Route path="/story-container" element={<StoryContainer />} />
          <Route path="/level-select-card-container" element={<LevelSelectCardContainer levelSelectData={levelSelectData}/>} />
          <Route path="/game-instructions" element={<GameInstructions />} />
          <Route path="/stats-page" element={<StatsPage />} />
        </Routes>
>>>>>>> 0b4b1bff148d6c468e65373d0a36e32f94100b0d
      </Layout>

  );
};

export default Home;





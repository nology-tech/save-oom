import React from "react";
import Layout from "../../components/Layout/Layout";
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

const Home = () => {
  //   const currentRound = {
  //     isCorrect: true,
  //     gameId: "swing",
  //     score: 6
  //    }
  // saveUserRound("dumbo","swing", 1 , currentRound, "g")
  //   .then(res => console.log(res + "success!"))
  //   .catch(res => res + "nope")

  getArrayOfRounds("dumbo", "swing", getCorrectGameRoundsForUser)
    .then((res) => console.log(res))
    .catch();
  getArrayOfRounds("dumbo", "swing", getIncorrectGameRoundsForUser).then(
    (res) => console.log(res)
  );

  return (

      <Layout>
        <NavBar />
        <Routes>
          <Route path="/SwingGamePlay" element={<SwingGamePlay />} />
          <Route path="/StoryContainer" element={<StoryContainer />} />
          <Route path="/LevelSelectCardContainer" element={<LevelSelectCardContainer levelSelectData={levelSelectData}/>} />
          <Route path="/GameInstructions" element={<GameInstructions />} />
          <Route path="/StatsPage" element={<StatsPage />} />
        </Routes>
      </Layout>

  );
};

export default Home;


/*
import React from "react";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../containers/navBar/NavBar";
import SwingGamePlay from "../SwingGamePlay/SwingGamePlay";
import StoryContainer from "../StoryContainer";
import LevelSelectCardContainer from "../../containers/LevelSelectCardContainer/LevelSelectCardContainer";
import GameInstructions from "../../components/GameInstructions"
import StatsPage from "../../pages/StatsPage"
import "./Home.scss";
import {
  getCorrectGameRoundsForUser,
  getIncorrectGameRoundsForUser,
  getArrayOfRounds,
} from "../../utils/firebaseGameUtils";
import { Router, Route, Routes } from "react-router-dom";

const Home = () => {
  //   const currentRound = {
  //     isCorrect: true,
  //     gameId: "swing",
  //     score: 6
  //    }
  // saveUserRound("dumbo","swing", 1 , currentRound, "g")
  //   .then(res => console.log(res + "success!"))
  //   .catch(res => res + "nope")

  getArrayOfRounds("dumbo", "swing", getCorrectGameRoundsForUser)
    .then((res) => console.log(res))
    .catch();
  getArrayOfRounds("dumbo", "swing", getIncorrectGameRoundsForUser).then(
    (res) => console.log(res)
  );

  return (

      <Layout>
        <NavBar />
        <Routes>
          <Route path="/SwingGamePlay" element={<SwingGamePlay />} />
          <Route path="/StoryContainer" element={<StoryContainer />} />
          <Route path="/LevelSelectCardContainer" element={<LevelSelectCardContainer />} />
          <Route path="/GameInstructions" element={<GameInstructions />} />
          <Route path="/StatsPage" element={<StatsPage />} />
        </Routes>
      </Layout>

  );
};

export default Home;
*/


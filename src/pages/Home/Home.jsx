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
import AvatarCreationContainer from "../../containers/AvatarCreationContainer/AvatarCreationContainer";
//import { useNavigate } from 'react-router';
//const loggedIn = false

const Home = () => {
  //   const currentRound = {
  //     isCorrect: true,
  //     gameId: "swing",
  //     score: 6
  //    }
  // saveUserRound("dumbo","swing", 1 , currentRound, "g")
  //   .then(res => console.log(res + "success!"))
  //   .catch(res => res + "nope")
  //let navigate = useNavigate();
  getArrayOfRounds("dumbo", "swing", getCorrectGameRoundsForUser)
    .then((res) => console.log(res))
    .catch();
  getArrayOfRounds("dumbo", "swing", getIncorrectGameRoundsForUser).then(
    (res) => console.log(res)
  );
  //if (!loggedIn) navigate("/login")

  return (

      <Layout>
        <NavBar />
        <Routes>
          <Route path="/swing-gamePlay" element={<SwingGamePlay />} />
          <Route path="/story-container" element={<StoryContainer />} />
          <Route path="/level-select-card-container" element={<LevelSelectCardContainer levelSelectData={levelSelectData}/>} />
          <Route path="/game-instructions" element={<GameInstructions />} />
          <Route path="/stats-page" element={<StatsPage />} />
          <Route path="/avatarcreationcontainer" element={<AvatarCreationContainer />} />
        </Routes>
      </Layout>

  );
};

export default Home;





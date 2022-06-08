// import React, { useEffect,useContext } from "react";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../containers/navBar/NavBar";
import SwingGamePlay from "../SwingGamePlay/SwingGamePlay";
// import UserContext from "../../contexts/UserContext";
import StoryContainer from "../StoryContainer/StoryContainer";
import LevelSelectCardContainer from "../../containers/LevelSelectCardContainer/LevelSelectCardContainer";
import GameInstructions from "../../components/GameInstructions/GameInstructions"
import StatsPage from "../../pages/StatsPage/StatsPage";
import AvatarCreation from "../AvatarCreation/AvatarCreation";
import "./Home.scss";
import {
  getCorrectGameRoundsForUser,
  getIncorrectGameRoundsForUser,
  getArrayOfRounds,
} from "../../utils/firebaseGameUtils";
import { Route, Routes } from "react-router-dom";
import levelSelectData from "../../data/levelSelectData"
// import Registration from "../Registration/Registration";

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

  return (

      <Layout>
        <NavBar />
        <Routes>
          <Route path="/swinggameplay" element={<SwingGamePlay />} />
          <Route path="/story" element={<StoryContainer />} />
          <Route path="/levelselect" element={<LevelSelectCardContainer levelSelectData={levelSelectData}/>} />
          <Route path="/instructions" element={<GameInstructions />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/avatarcreation" element={<AvatarCreation />} />
        </Routes>
      </Layout>

  );
};

export default Home;







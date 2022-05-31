import React from "react";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../containers/navBar/NavBar";
// import SwingGamePlay from "../SwingGamePlay/SwingGamePlay";
import "./Home.scss";
// import {
//   getCorrectGameRoundsForUser,
//   getIncorrectGameRoundsForUser,
//   getArrayOfRounds,
// } from "../../utils/firebaseGameUtils";
// import levelSelectData from "../../data/levelSelectData";
import LevelSelectCardContainer from "../../containers/LevelSelectCardContainer/LevelSelectCardContainer";
import levelSelectData from "../../data/levelSelectData"

const Home = () => {
  // //   const currentRound = {
  // //     isCorrect: true,
  // //     gameId: "swing",
  // //     score: 6
  // //    }
  // // saveUserRound("dumbo","swing", 1 , currentRound, "g")
  // //   .then(res => console.log(res + "success!"))
  // //   .catch(res => res + "nope")

  // getArrayOfRounds("dumbo", "swing", getCorrectGameRoundsForUser)
  //   .then((res) => console.log(res))
  //   .catch();
  // getArrayOfRounds("dumbo", "swing", getIncorrectGameRoundsForUser).then(
  //   (res) => console.log(res)
  // );

  return (
    <>
      <Layout>
        <NavBar />
        {/* <SwingGamePlay /> */}
        {/* <LevelSelectCard 
        headingText={levelSelectData[0].heading} headingImg={levelSelectData[0].lockImage} paragraphText={levelSelectData[0].paragraph} 
        buttonText={levelSelectData[0].buttonText} buttonStyle={levelSelectData[0].buttonStyle} isLocked={levelSelectData[0].isLocked} /> */}
        <LevelSelectCardContainer levelSelectData={levelSelectData}/>
      </Layout>
    </>
  );
};

export default Home;

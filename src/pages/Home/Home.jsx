import React from 'react';
import Layout from '../../components/Layout/Layout';
import NavBar from '../../containers/navBar/NavBar';
import SwingGamePlay from '../SwingGamePlay/SwingGamePlay';
import './Home.scss';
import { getCorrectGameRoundsForUser,  getIncorrectGameRoundsForUser, getArrayOfRounds, saveUserRound} from '../../firebase';

const Home = () => {


  const currentRound = {
    isCorrect: false, 
    gameId: "swing", 
    score: "5"
   }
saveUserRound("dumbo","swing", currentRound, "g")
  .then(res => console.log(res + "success!"))
  .catch(res => res + "nope")

 getArrayOfRounds("dumbo", "swing", getCorrectGameRoundsForUser).then(res => console.log(res)).catch()
 getArrayOfRounds("dumbo", "swing", getIncorrectGameRoundsForUser).then(res => console.log(res))

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

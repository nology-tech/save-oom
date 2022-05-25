import React from 'react';
import Layout from '../../components/Layout/Layout';
import NavBar from '../../containers/navBar/NavBar';
import SwingGamePlay from '../SwingGamePlay/SwingGamePlay';
import './Home.scss';
import { getCorrectGameRoundsForUser,  getIncorrectGameRoundsForUser, getArrayOfRounds} from '../../firebase';

const Home = () => {

  // getSpecificRoundsForUser("dumbo", "swing").then(res => console.log(res))
 getArrayOfRounds("dumbo", "swing", getCorrectGameRoundsForUser).then(res => console.log(res))
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

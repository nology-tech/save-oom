import React from 'react';
import Layout from '../../components/Layout/Layout';
import GamePlay from '../../containers/GamePlay/GamePlay';
import NavBar from '../../containers/navBar/NavBar';
import "./Home.scss";



const Home = () => {

  return (
    <>
      <Layout>

        <NavBar />
        <GamePlay />
      </Layout>
    </>
  );
};

export default Home;


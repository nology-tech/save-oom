import React from 'react';
import GamePlay from '../GamePlay/GamePlay';
import Layout from '../../components/Layout/Layout';
import NavBar from '../../containers/navBar/NavBar';

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

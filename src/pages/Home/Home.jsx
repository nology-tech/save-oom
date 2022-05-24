import React from 'react';
import Layout from '../../components/Layout/Layout';
import NavBar from '../../containers/navBar/NavBar';
// import SwingGamePlay from '../SwingGamePlay/SwingGamePlay';
import StatsPage from '../../pages/StatsPage/StatsPage'
import './Home.scss';

const Home = () => {
  return (
    <>
      <Layout>
        <NavBar />
        <StatsPage/>
      </Layout>
    </>
  );
};

export default Home;

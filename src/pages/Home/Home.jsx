import React from 'react';
import Layout from '../../components/Layout/Layout';
import NavBar from '../../containers/navBar/NavBar';
import SwingGamePlay from '../SwingGamePlay/SwingGamePlay';
import './Home.scss';

const Home = () => {
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

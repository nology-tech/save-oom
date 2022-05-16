import React from 'react';
import Layout from '../../components/Layout/Layout';
import NavBar from '../../components/navBar/NavBar';
import levelSelectData from "../../data/levelSelectData";
import LevelSelectCardContainer from '../../containers/LevelSelectCardContainer/LevelSelectCardContainer';


const Home = () => {
  return (
    <>
      <Layout>
        <NavBar />
        <LevelSelectCardContainer levelSelectData={levelSelectData} />
      </Layout>
    </>
  );
};

export default Home;

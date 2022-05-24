import React from 'react';
import Layout from '../../components/Layout/Layout';
import StatsPage from '../StatsPage/StatsPage';
import NavBar from '../../containers/navBar/NavBar';



const Home = () => {
  return (
    <>
      <Layout>
        <NavBar/>
        <StatsPage></StatsPage>
      </Layout>
    </>
  );
};

export default Home;

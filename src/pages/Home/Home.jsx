import React from 'react';
import Layout from '../../components/Layout/Layout';
import PhonicComponent from '../../components/PhonicComponent/PhonicComponent';
import NavBar from '../../containers/navBar/NavBar';

const Home = () => {
  return (
    <>
      <Layout>
        <NavBar />
        <PhonicComponent phonicText={"Ay"} />
      </Layout>
    </>
  );
};

export default Home;

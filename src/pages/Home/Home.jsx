import React from 'react';
import Layout from '../../components/Layout/Layout';
import NavBar from '../../containers/navBar/NavBar';
import "./Home.scss";
import { getSpecificRoundsForUser} from '../../firebase';


const Home = () => {
  // getRoundsForUser("dumbo").then(res => console.log(res)).catch(console.log("error!"))

  getSpecificRoundsForUser("dumbo", "swing").then(res => console.log(res))


  return (
    <>
      <Layout>
        <NavBar />
      </Layout>
    </>
  );
};

export default Home;


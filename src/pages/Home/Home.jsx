import Layout from '../../components/Layout/Layout';
import NavBar from '../../components/navBar/NavBar';
import StoryContainer from '../StoryContainer/StoryContainer';


const Home = () => {
  return (
    <>
      <Layout>
        <StoryContainer />
        <h1>Save Oom!!</h1>
        <p>Let&apos;s save the little critter!</p>
      </Layout>
      <NavBar />
    </>
  );
};

export default Home;

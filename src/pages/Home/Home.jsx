// import Layout from '../../components/Layout/Layout';
import NavBar from '../../components/navBar/NavBar';
import StoryContainer from '../StoryContainer/StoryContainer';
import "./Home.scss"
const Home = () => {
  return (
    <div className='home'>
      {/* <Layout>
        <h1>Save Oom!!</h1>
        <p>Let&apos;s save the little critter!</p>
      </Layout> */}
      <NavBar />
      <StoryContainer />
    </div>
  );
};

export default Home;

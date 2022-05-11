// import Layout from '../../components/Layout/Layout';
import NavBar from '../../components/navBar/NavBar';
import StoryContainer from '../StoryContainer/StoryContainer';
import "./Home.scss"
const Home = () => {

  return (
    <div className='home'>
      
      <NavBar />
      <StoryContainer />
    </div>
  );
};

export default Home;

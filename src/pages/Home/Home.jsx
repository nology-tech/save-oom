import Layout from '../../components/Layout/Layout';
import NavBar from '../../components/navBar/NavBar';
import Timer from '../../components/Timer/Timer';

const Home = () => {
  return (
    <>
      <Layout>
        <h1>Save Oom!!</h1>
        <p>Let&apos;s save the little critter!</p>
      </Layout>
      <NavBar />
      <Timer startTime={60} />
      </>
  );
};

export default Home;

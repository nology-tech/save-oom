import Layout from '../../components/Layout/Layout';
import NavBar from '../../components/navBar/NavBar';
import AvatarHeading from '../../components/AvatarHeading/AvatarHeading';

const Home = () => {
  return (
    <>
      <Layout>
        <h1>Save Oom!!</h1>
        <p>Let&apos;s save the little critter!</p>
        <AvatarHeading avatarHeadingText={"Please add an avatar to save Oom"}/>
        <AvatarHeading avatarHeadingText={"Name your avatar"}/>
        <AvatarHeading avatarHeadingText={"Jack's a great name, Oom would be proud!"}/>
      </Layout>
      <NavBar />
    </>
  );
};

export default Home;

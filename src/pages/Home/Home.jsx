import Layout from '../../components/Layout/Layout';
import NavBar from '../../components/navBar/NavBar';
import TextInput from '../../components/TextInput/TextInput';
import "./Home.scss"

const Home = () => {
  return (
    <>
      <Layout>
        <h1>Save Oom!!</h1>
        <p>Let&apos;s save the little critter!</p>
        <TextInput labelText="FIRST NAME" inputType="text" inputName="firstname"/>
        <TextInput labelText="EMAIL ADDRESS" inputType="email" inputName="email"/>
        <TextInput labelText="PASSWORD" inputType="password" inputName="password"/>
        <p className="some-text">This is some TEXT</p>
      </Layout>
      <NavBar />
    </>
  );
};

export default Home;

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import './styles/main.scss';
import NavBarHeading from './components/navBarHeading/NavBarHeading';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='*' element={<Home />} />
      </Routes>
      <NavBarHeading />
    </>
  );
};

export default App;

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import './styles/main.scss';

const App = () => {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Home />} />
=======
      <Route path='*' element={<Home />} />
>>>>>>> 33c85f7a7012522dd8d39dae5468b9054e402346
    </Routes>
  );
};

export default App;

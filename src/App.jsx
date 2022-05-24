import { Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";
//import LogIn from "./pages/LogIn/LogIn";
//import Registration from "./pages/Registration/Registration";
//import Home from './pages/Home/Home';
import "./styles/main.scss";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<LogIn />} />
    </Routes>
  );
};

export default App;

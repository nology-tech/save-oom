import { Route, Routes } from "react-router-dom";
import "./styles/main.scss";
import LogIn from  "./pages/LogIn/LogIn"
import Registration from "./pages/Registration/Registration"
import Home from "./pages/Home/Home"

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="*" element={<Home />} />   
      </Routes>
  );
};

export default App;



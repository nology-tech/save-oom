import { Route, Routes } from "react-router-dom";
//import Home from "./pages/Home/Home";
import AvatarCreation from "./pages/AvatarCreation/AvatarCreation";
import "./styles/main.scss";
// import "animate.css";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<AvatarCreation />} />
    </Routes>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
//import Home from "./pages/Home/Home";
import AvatarCreation from "./pages/AvatarCreation/AvatarCreation";
import "./styles/main.scss";
// import "animate.css";
=======
import Home from "./pages/Home/Home";
import "./styles/main.scss";
>>>>>>> 48b6684a9d0cd6c99102cdd512e777db51ea99b9

const App = () => {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="*" element={<AvatarCreation />} />
=======
      <Route path="*" element={<Home />} />
>>>>>>> 48b6684a9d0cd6c99102cdd512e777db51ea99b9
    </Routes>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import "./styles/main.scss";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import { useContext } from "react";
import UserContext from "./contexts/UserContext";
const App = () => {
  const user = useContext(UserContext)
  console.log(user)
  return (
    <>
      {!user.user ?
          <LogIn/> :
          <Routes>
          <Route path="*" element={<Home />} />
        </Routes>}
    </>
  )
};

export default App;



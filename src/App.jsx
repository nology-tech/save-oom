import { Route, Routes } from "react-router-dom";
import "./styles/main.scss";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import { useContext } from "react";
import UserContext from "./contexts/UserContext";
import Registration from "./pages/Registration/Registration";
const App = () => {
  const user = useContext(UserContext)
  console.log("userContext in App", user);
  return (
    <Routes>
      {!user.user ? (
          <>
          <Route path="/" element={<LogIn />} />
          </>
          
         ): null}
          <>
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<Home />} />
          </>
            
    </Routes>
  )
};

export default App;



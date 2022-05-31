import { Route, Routes } from "react-router-dom";
import "./styles/main.scss";
import { UserProvider } from "./contexts/UserContext";
import Home from "./pages/Home/Home";
const App = () => {
  return (
    <UserProvider>
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
    </UserProvider>
  )
};

export default App;



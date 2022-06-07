import App from "./App";
import { render, screen } from "@testing-library/react";
import { customRender } from "./utils/testUtils";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";
import { Router } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import LogIn from "./pages/LogIn/LogIn";
// import { Router } from "react-router-dom";
// import { render } from "@testing-library/react";

let container = null;

const userFnctn = () => {
  console.log("set")
}
const userObj = {
  user: {
    name: "Jack", 
    email:"Hello@gmail"
  },
  setUser: userFnctn,
};


// it("Should render the app", async () => {

//   const history = createMemoryHistory();

//   await act(async () => render(    
//     <Router location={history.location} navigator={history}>
//       <UserContext.Provider value={userObj}>
//         <App />
//       </UserContext.Provider>
//     </Router>));

//   expect(container).toMatchSnapshot();
// });

it('Should land on the Login Page', async () => {
  const history = createMemoryHistory();
  
  await act(async () => render(    
    <Router location={history.location} navigator={history}>
      <UserContext.Provider value={userObj}>
        <LogIn />
      </UserContext.Provider>
    </Router>));

  expect(screen.getByText(/This is the log in page/i)).toBeInTheDocument()
})


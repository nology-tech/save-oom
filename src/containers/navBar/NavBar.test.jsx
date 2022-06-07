import "./NavBar";
import NavBar from "./NavBar";
import UserContext from "../../contexts/UserContext";
import {customRender, customContextRender} from "../../utils/testUtils"
import { screen } from "@testing-library/react";

const userObj = {
  user: {
    name: "Jack", 
    email:"Hello@gmail"
  }
};

it("Should render the navbar", () => {
  const { container } = customRender(
    <UserContext.Provider value={userObj}>
      <NavBar />
    </UserContext.Provider>
  );
  expect(container).toMatchSnapshot();
});

it("Should render the navbar", () => {
  const { container } = customRender(
    <UserContext.Provider value={userObj}>
      <NavBar />
    </UserContext.Provider>
  );
  expect(container).toMatchSnapshot();
});


it("Should contain the navbar list that contains levels, stats and name from context provider ", () => {
  customContextRender(<NavBar />, userObj);
  const navItem1 = screen.getByText(/Level 1/i);
  const navItem2 = screen.getByText(/Level 2/i);
  const name = screen.getByText(/Jack/i);
  const stats = screen.getByText(/Stats/i);
  expect(navItem1).toBeInTheDocument();
  expect(navItem2).toBeInTheDocument();
  expect(stats).toBeInTheDocument();
  expect(name).toBeInTheDocument();
});

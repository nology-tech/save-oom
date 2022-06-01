import "./NavBar";
import { customRender } from "../../utils/testUtils";
import NavBar from "./NavBar";
import { UserProvider } from "../../contexts/UserContext";
import { render, screen } from "@testing-library/react";

const userObj = {
  name: "Jack",
  id: "UserId1",
  email: "jack@gamil.com",
};

it("Should render the navbar", () => {
  const { container } = customRender(
    <UserProvider value={userObj}>
      <NavBar />
    </UserProvider>
  );
  expect(container).toMatchSnapshot();
});
it("Should contain the navbar list that contains Level 1 ", () => {
  render(
    <UserProvider value={userObj}>
      <NavBar />
    </UserProvider>
  );
  const navItem1 = screen.getByText(/Level 1/i);
  const navItem2 = screen.getByText(/Level 2/i);
  const stats = screen.getByText(/Stats/i);
  expect(navItem1).toBeInTheDocument();
  expect(navItem2).toBeInTheDocument();
  expect(stats).toBeInTheDocument();
});

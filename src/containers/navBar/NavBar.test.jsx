import "./NavBar";
import { customRender } from "../../utils/testUtils";
import NavBar from "./NavBar";
import { render, screen } from "@testing-library/react";

it("Should render the navbar", () => {
  const { container } = customRender(<NavBar />);
  expect(container).toMatchSnapshot();
});
it("Should contain the navbar list that contains Level 1 ", () => {
  render(<NavBar />);
  const navItem1 = screen.getByText(/Level 1/i);
  const navItem2 = screen.getByText(/Level 2/i);
  const stats = screen.getByText(/Stats/i);
  expect(navItem1).toBeInTheDocument();
  expect(navItem2).toBeInTheDocument();
  expect(stats).toBeInTheDocument();
});

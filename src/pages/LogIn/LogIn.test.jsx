import { render, screen } from "@testing-library/react";
import Button from "../../components/Button/Button";

import LogIn from "./LogIn";

it("Should render the LogIn screen", () => {
  render(<LogIn />);

  const paragraph1 = screen.getByText(/This is the log in page/i);

  expect(paragraph1).toBeInTheDocument();
});
it("Should display the button with the text - log in", () => {
  render(<Button buttonText="Log in" />);
  const paragraph1 = screen.getByText(/Log in/i);
  expect(paragraph1).toBeInTheDocument();
});
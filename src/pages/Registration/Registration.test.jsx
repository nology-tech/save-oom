import { render, screen } from "@testing-library/react";
import Button from "../../components/Button/Button";
import PopUp from "../../components/PopUp/PopUp";

import Registration from "./Registration";

it("Should render the Registration screen", () => {
  render(<Registration />);

  const paragraph1 = screen.getByText(/This is the registration page/i);

  expect(paragraph1).toBeInTheDocument();
});

it("Should display the button with the text - Create your account", () => {
  render(<Button buttonText="Create your account" />);
  const paragraph1 = screen.getByText(/Create your account/i);
  expect(paragraph1).toBeInTheDocument();
});

it("Should display the popup with text - User has registered", () => {
  render(<PopUp content="User has registered" />);
  const paragraph1 = screen.getByText(/User has registered/i);
  expect(paragraph1).toBeInTheDocument();
});
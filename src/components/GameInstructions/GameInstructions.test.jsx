import { render, screen } from "@testing-library/react";

import GameInstructions from "./GameInstructions";
import Button from "../Button/Button";

it("Should render the game instructions", () => {
  render(<GameInstructions/>);

  const paragraph1 = screen.getByRole("text");

  expect(paragraph1).toBeInTheDocument();
});
it("Should display the button with the text - lets play", () => {
  render(<Button buttonText="let's play" />);
  const paragraph1 = screen.getByText(/let's play/i);
  expect(paragraph1).toBeInTheDocument();
});

import {render, screen} from "@testing-library/react"
import Button from "../../components/Button/Button";

import GameEnd from "./GameEnd"

it ("Should render the Game End screen", () => {
  render(<GameEnd/>);

  const paragraph1 = screen.getByText(/Time's up/i)

  expect(paragraph1).toBeInTheDocument();
})
it('Should display the button with the text -Back to Home', () => {
    render(<Button buttonText="Back to Home"/>);
    const paragraph1 = screen.getByText(/Back to Home/i)
    expect(paragraph1).toBeInTheDocument();
})

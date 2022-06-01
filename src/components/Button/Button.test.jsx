import Button from "./Button";
import { customRender } from "../../utils/testUtils";
import { render, screen } from "@testing-library/react";

it("Should render the button", () => {
  const { container } = customRender(<Button />);

  expect(container).toMatchSnapshot();
});
it("Should display the button with the text - next", () => {
  render(<Button buttonText="Next" />);
  const paragraph1 = screen.getByText(/Next/i);
  expect(paragraph1).toBeInTheDocument();
});

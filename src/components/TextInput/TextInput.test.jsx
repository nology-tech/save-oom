import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextInput from "./TextInput";

it("Should render the input box", () => {
  //1. Arrange
  render(<TextInput />);

  //2. Act
  const input = screen.getByRole("textbox");

  //3. Assert
  expect(input).toBeInTheDocument();
});

it("Should render the input box label", () => {
  //1. Arrange
  render(<TextInput labelText={"Name"} type={"text"} />);

  //2. Act
  const labelText = screen.queryByText(/Name/i);

  //3. Assert
  expect(labelText).toBeInTheDocument();
});

it("Should render the input box containing 'Steadmond'", () => {
  //1. Arrange
  render(<TextInput />);

  //2. Act
  const input = screen.getByRole("textbox");
  userEvent.type(input, "Steadmond");

  //3. Assert
  expect(input.value).toEqual("Steadmond");
});

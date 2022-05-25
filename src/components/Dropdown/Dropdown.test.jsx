import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

it("Should render the Dropdown", () => {
  //1. Arrange
  render(<Dropdown />);

  //2. Act
  const dropdown = screen.getByRole("dropdown");

  //3. Assert
  expect(dropdown).toBeInTheDocument();
});

it("Should render the dropdown with text 'Level", () => {
  //1. Arrange
  render(<Dropdown option1={"Level"} />);

  //2. Act
  const dropdownText = screen.queryByText("Level");

  //3. Assert
  expect(dropdownText).toBeInTheDocument();
});

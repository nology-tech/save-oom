import { render, screen } from "@testing-library/react";
import Graph from "./Graph";

it("Should render the Dropdown", () => {
  //1. Arrange
  render(<Graph />);

  //2. Act
  const graph = screen.getByRole("graph");

  //3. Assert
  expect(graph).toBeInTheDocument();
});

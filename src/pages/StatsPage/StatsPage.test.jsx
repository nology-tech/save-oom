import { render, screen } from "@testing-library/react";
import Dropdown from "../../components/Dropdown/Dropdown";
import Graph from "../../components/Graph/Graph";
import StatsPage from "./StatsPage";

it("Should render the StatsPage screen", () => {
  render(<StatsPage />);

  const heading = screen.getByText(/Stats for/i);

  expect(heading).toBeInTheDocument();
});

it("Should display the dropdown with the text -Level", () => {
  render(<Dropdown option1="Level" />);
  const text = screen.getByText(/Level/i);
  expect(text).toBeInTheDocument();
});

it("Should display the graph", () => {
  render(<Graph />);
  const graph = screen.getByRole("graph");
  expect(graph).toBeInTheDocument();
});

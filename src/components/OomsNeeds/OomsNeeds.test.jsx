import { customRender } from "../../utils/testUtils";
import OomsNeeds from "./OomsNeeds";
import { render, screen } from "@testing-library/react";

it("Should render the Ooms needs", () => {
  const { container } = customRender(<OomsNeeds />);
  expect(container).toMatchSnapshot();
});

it("Should contain the percentage ", () => {
  render(<OomsNeeds />);
  const item = screen.getByText(/%/i);
  expect(item).toBeInTheDocument();
});

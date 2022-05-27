import { render, screen } from "@testing-library/react";
import PhonicComponent from "./PhonicComponent";
import { customRender } from "../../utils/testUtils";

it("Should render the heading text 's'", () => {
  //1. Arrange
  render(<PhonicComponent phonicText={"s"} />);

  //2. Act
  const headingText = screen.queryByText("s");

  //3. Assert
  expect(headingText).toBeInTheDocument();
});

it("Should render the phonic header", () => {
  const { container } = customRender(<PhonicComponent phonicText={"test"} />);
  expect(container).toMatchSnapshot();
});

it("Should contain the phonic heading", () => {
  render(<PhonicComponent phonicText={"test"} />);
  const phonicHeading = screen.getByText(/test/i);
  expect(phonicHeading).toBeInTheDocument();
});

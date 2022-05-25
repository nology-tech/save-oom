import { render, screen } from "@testing-library/react";
import NavBarHeading from "./NavBarHeading";
import { customRender } from "../../utils/testUtils";
import VectorLock from "../../assets/images/Vectorlock.png";

it("Should render the navbar header", () => {
  const { container } = customRender(
    <NavBarHeading
      headingText="heading"
      headingImg={VectorLock}
      headingStyle={"nav-bar-header"}
      isLocked={true}
    />
  );
  expect(container).toMatchSnapshot();
});

it("Should contain the navbar heading", () => {
  render(<NavBarHeading headingText={"Heading"} />);
  const navHeading = screen.getByText(/Heading/i);
  expect(navHeading).toBeInTheDocument();
});

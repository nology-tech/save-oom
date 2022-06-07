import { render, screen } from "@testing-library/react";
import PopUp from "../../components/PopUp/PopUp";


it("Should render the PopUp screen", () => {
  render(<PopUp />);
  //2. Act
  const popup = screen.getByRole("Popup");

  //3. Assert
  expect(popup).toBeInTheDocument();
});
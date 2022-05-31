import { render, screen } from "@testing-library/react";
import AvatarCreation from "./AvatarCreation.jsx"


it("Should display the graph", () => {
    render(<AvatarCreation />);
    const AC = screen.getByRole("AC");
    expect(AC).toBeInTheDocument();
  });
  
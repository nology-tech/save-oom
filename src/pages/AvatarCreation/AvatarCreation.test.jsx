import { render, screen } from "@testing-library/react";
import AvatarCreation from "./AvatarCreation.jsx";


it("Should display the graph", () => {
    render(<AvatarCreation />);
    const ACC = screen.getByRole("ACC");
    expect(ACC).toBeInTheDocument();
  });
  

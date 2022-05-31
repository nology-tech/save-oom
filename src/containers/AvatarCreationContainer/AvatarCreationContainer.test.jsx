import { render, screen } from "@testing-library/react";
import AvatarCreationContainer from "./AvatarCreationContainer.jsx";


it("Should display the graph", () => {
    render(<AvatarCreationContainer />);
    const ACC = screen.getByRole("ACC");
    expect(ACC).toBeInTheDocument();
  });
  
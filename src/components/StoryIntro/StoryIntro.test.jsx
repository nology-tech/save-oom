import { render, screen } from "@testing-library/react";

import StoryIntro from "./StoryIntro";

it("Should render the story intro", () => {
  render(<StoryIntro text={"Once upon a time"} />);

  const paragraph1 = screen.getByText(/Once upon a time/i);

  expect(paragraph1).toBeInTheDocument();
});

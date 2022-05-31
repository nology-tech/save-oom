
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";
import { Router } from "react-router-dom";
import Button from "../../components/Button/Button";

import Registration from "./Registration";

it("Should render the Registration screen", async () => {
  const history = createMemoryHistory();

  await act(async () => render(    
    <Router location={history.location} navigator={history}>
      <Registration />
    </Router>));

  const paragraph1 = screen.getByText(/This is the registration page/i);
  expect(paragraph1).toBeInTheDocument();
})
it("Should display the button with the text - Create your account", () => {
  render(<Button buttonText="Create your account" />);
  const paragraph1 = screen.getByText(/Create your account/i);
  expect(paragraph1).toBeInTheDocument();
});


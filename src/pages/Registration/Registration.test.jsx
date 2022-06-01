
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";
import { Router } from "react-router-dom";
import Button from "../../components/Button/Button";
import PopUp from "../../components/PopUp/PopUp";

import Registration from "./Registration";

it("Should render the Registration screen", async () => {
  const history = createMemoryHistory();

  await act(async () => render(    
    <Router location={history.location} navigator={history}>
      <Registration />
    </Router>));

  const paragraph1 = screen.getByText(/This is the registration page/i);
  expect(paragraph1).toBeInTheDocument();
<<<<<<< HEAD
});

=======
})
>>>>>>> 0b4b1bff148d6c468e65373d0a36e32f94100b0d
it("Should display the button with the text - Create your account", () => {
  render(<Button buttonText="Create your account" />);
  const paragraph1 = screen.getByText(/Create your account/i);
  expect(paragraph1).toBeInTheDocument();
});

<<<<<<< HEAD
it("Should display the popup with text - User has registered", () => {
  render(<PopUp content="User has registered" />);
  const paragraph1 = screen.getByText(/User has registered/i);
  expect(paragraph1).toBeInTheDocument();
});
=======
>>>>>>> 0b4b1bff148d6c468e65373d0a36e32f94100b0d

import App from "./App";
import { screen } from "@testing-library/react";
import { customRender } from "./utils/testUtils";
// import { Router } from "react-router-dom";
// import { render } from "@testing-library/react";


it("Should render the app", () => {
  const { container } = customRender(<App />);
  expect(container).toMatchSnapshot();
});

it('Should land on the Login Page', () => {
  customRender(<App />);
  expect(screen.getByText(/This is the log in page/i)).toBeInTheDocument()
})


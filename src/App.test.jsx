import App from "./App";
import { screen } from "@testing-library/react";
import {customContextRender } from "./utils/testUtils";
import { BrowserRouter } from "react-router-dom";
const userObj = {
  user: {
    name: "Jack", 
    email:"Hello@gmail"
  },
};

const nullObj = {
  name:null
};

// If user name is null - that will show log in 
it('Should land on the Login Page if user object null', () => {
  customContextRender( 
  <BrowserRouter>
    <App />
  </BrowserRouter>, nullObj);
  expect(screen.getByText(/Email/i)).toBeInTheDocument()
})

//If user is not null it will show main app 
it('Should land on App page if user object not null', () => {
  customContextRender(
  <BrowserRouter>
    <App/>
  </BrowserRouter>, userObj);
  expect(screen.getByText(/Introduction/i)).toBeInTheDocument()
})



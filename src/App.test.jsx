import App from "./App";
import { screen } from "@testing-library/react";
import {customRender } from "./utils/testUtils";
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
  customRender(<App />, true, {useContext: true, value: nullObj});
  expect(screen.getByText(/Email/i)).toBeInTheDocument()
})
//If user is not null it will show main app 
it('Should land on App page if user object not null', () => {
  customRender(<App />, true, {useContext: true, value: userObj});
  expect(screen.getByText(/Introduction/i)).toBeInTheDocument()
})



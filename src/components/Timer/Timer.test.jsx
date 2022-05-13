import { render, screen } from "@testing-library/react";
import Timer from "./Timer";



it("Should render the timer", () => {

    render(<Timer startTime={60} />);

  const timer = screen.getByRole("heading");

expect(timer).toBeInTheDocument();
})


it("Should set timeout to start on page load", () => {
    jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

render(<Timer startTime={60} />);

  expect(setTimeout).toHaveBeenCalled();
})
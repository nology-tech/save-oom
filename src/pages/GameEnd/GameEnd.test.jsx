import { render, screen } from "@testing-library/react";
import { customRender } from '../../utils/testUtils';
import GameEnd from "./GameEnd";


it("Should render the Game End screen", () => {
  const { container } = customRender(<GameEnd />);

  expect(container).toMatchSnapshot();
});

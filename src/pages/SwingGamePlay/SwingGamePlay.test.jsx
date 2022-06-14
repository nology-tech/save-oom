import { customRender } from '../../utils/testUtils';
import SwingGamePlay from './SwingGamePlay';
import { render, screen } from '@testing-library/react';

const userFnctn = () => {
  console.log("Updates user context ")
}
const userObj = {
  user: {
    name: "Jack",
    email:"Hello@gmail"
  },
  setUser: userFnctn,
};


it("Should render the Swing Game Play screen", () => {
  const { container } = customRender(<SwingGamePlay />);

  expect(container).toMatchSnapshot();
});

it('Should render the score count screen', () => {
  customRender(<SwingGamePlay />, true, {useContext: true, value: userObj});
  const scoreCount = screen.getByText(/Nothing!/i);
  expect(scoreCount).toBeInTheDocument();
});

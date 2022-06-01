import { customRender } from '../../utils/testUtils';
import SwingGamePlay from './SwingGamePlay';
import { render, screen } from '@testing-library/react';

it("Should render the Swing Game Play screen", () => {
  const { container } = customRender(<SwingGamePlay />);

  expect(container).toMatchSnapshot();
});

it('Should render the score count screen', () => {
  render(<SwingGamePlay />);

  const scoreCount = screen.getByText(/Number Of Correct Sounds:/i);

  expect(scoreCount).toBeInTheDocument();
});

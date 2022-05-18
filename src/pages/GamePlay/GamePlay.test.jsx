import { render, screen } from '@testing-library/react';
import { customRender } from '../../utils/testUtils';
import GamePlay from './GamePlay';

it('Should render the Game Play screen', () => {
  const { container } = customRender(<GamePlay />);

  expect(container).toMatchSnapshot();
});

import { customRender } from '../../utils/testUtils';
import GamePlayAnimation from './GamePlayAnimation';

it('Should render the Game Play screen', () => {
  const { container } = customRender(<GamePlayAnimation />);

  expect(container).toMatchSnapshot();
});

import { customRender } from '../../utils/testUtils';
import SwingGamePlay from './SwingGamePlay';
import AnimatedImage from '../../components/AnimatedImage/AnimatedImage';

it('Should render the Swing Game Play screen', () => {
  const { container } = customRender(<SwingGamePlay />);

  expect(container).toMatchSnapshot();
});

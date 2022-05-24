import { customRender } from '../../utils/testUtils';
import SwingGamePlay from './SwingGamePlay';
import AnimatedImage from '../../components/AnimatedImage/AnimatedImage';

it('Should render the Swing Game Play screen', () => {
  const { container } = customRender(<SwingGamePlay />);

  expect(container).toMatchSnapshot();
});
it('Should render the the AninatedImage components on screen', () => {
  const { container } = customRender(<AnimatedImage />);

  expect(container).toMatchSnapshot();
});

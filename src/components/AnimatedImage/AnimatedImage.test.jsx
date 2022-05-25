import { customRender } from "../../utils/testUtils";
import AnimatedImage from "../AnimatedImage/AnimatedImage";

it("Should render the AnimatedImage to screen", () => {
  const { container } = customRender(<AnimatedImage />);

  expect(container).toMatchSnapshot();
});

import ValidateAnswerButtons from "./ValidateAnswerButtons";
import { customRender } from "../../utils/testUtils";

it("Should render the button", () => {
  const { container } = customRender(<ValidateAnswerButtons />);

  expect(container).toMatchSnapshot();
});

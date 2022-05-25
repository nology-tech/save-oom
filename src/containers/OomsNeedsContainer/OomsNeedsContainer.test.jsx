import { customRender } from "../../utils/testUtils";
import OomsNeedsContainer from "./OomsNeedsContainer";

it("Should render the Ooms need container", () => {
  const { container } = customRender(<OomsNeedsContainer />);
  expect(container).toMatchSnapshot();
});

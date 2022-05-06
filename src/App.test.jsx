import App from "./App";
import { customRender } from "./utils/testUtils";

it("Should render the app", () => {
  const { container } = customRender(<App />);

  expect(container).toMatchSnapshot();
});

import { customRender } from '../../utils/testUtils';
import AvatarCreation from "./AvatarCreation.jsx";


  
  it("Should render the Avatar Creation Pageu", () => {
    const { container } = customRender(<AvatarCreation />);
  
    expect(container).toMatchSnapshot();
  });
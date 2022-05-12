import {render, screen} from "@testing-library/react"
import NavBarHeading from "./NavBarHeading";
import { customRender } from '../../utils/testUtils';


it('Should render the navbar header', () => {
    const { container } = customRender(<NavBarHeading />);
    expect(container).toMatchSnapshot();
});

it('Should contain the navbar heading', () => {
    render(<NavBarHeading />);
  
});
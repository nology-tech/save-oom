import {render, screen} from "@testing-library/react";
import PhonicComponent from "./PhonicComponent";

it("Should render the heading text 'This a test'", ()=> {
    //1. Arrange
    render(<PhonicComponent phonicText={'Test'}/>);

    //2. Act
    const headingText = screen.queryByText('Test')

    //3. Assert
    expect(headingText).toBeInTheDocument()
})
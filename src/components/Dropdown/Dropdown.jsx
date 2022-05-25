import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import "./Dropdown.scss";

const DropdownButton = ({
  option1,
  option2,
  option3,
  option4,
  dropdownStyle,
}) => {
  return (
    <>
      <Dropdown role="dropdown">
        {/* name displayed on the dropdown button on loading */}
        {/* when clicked toogles the dropdown */}
        <Dropdown.Toggle className={dropdownStyle}>{option1}</Dropdown.Toggle>

        {/* list of dropdown items */}
        <Dropdown.Menu>
          {/* dropdown items */}
          <Dropdown.Item href="#">{option2}</Dropdown.Item>

          <Dropdown.Item href="#">{option3}</Dropdown.Item>

          <Dropdown.Item href="#">{option4}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropdownButton;

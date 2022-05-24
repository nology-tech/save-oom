import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import './Dropdown.scss';
  
export default function DropdownButton({option1, option2, option3, option4, dropdownStyle}) {
  return (
     <>
      <Dropdown role="dropdown">
        <Dropdown.Toggle className={dropdownStyle}>
          {option1}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">
            {option2}
          </Dropdown.Item>
          <Dropdown.Item href="#">
            {option3}
          </Dropdown.Item>
          <Dropdown.Item href="#">
            {option4}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
import React from "react";
import "./TextInput.scss";

const TextInput = ({
  labelText,
  inputType,
  onChangeEvent,
  inputName,
  value,
}) => {
  // Displays Text Input & Label

  return (
    <>
      <div className="text-input-container">
        <label htmlFor={inputName} className="text-input-container__label">
          {labelText}
        </label>
        <input
          type={inputType}
          required 
          maxLength="30"
          name={inputName}
          className="text-input-container__input"
          value={value}
          onChange={onChangeEvent}
        />
      </div>
    </>
  );
};

export default TextInput;

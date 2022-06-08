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
          name={inputName}
          className="text-input-container__input"
          value={value}
          onChange={onChangeEvent}
          required
          maxLength={30}
        />
      </div>
    </>
  );
};

export default TextInput;

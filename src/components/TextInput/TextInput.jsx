import React from 'react'
import "./TextInput.scss"

const TextInput = ({labelText, inputType, inputName}) => {

  return <>
    <div className="text-input-container">
        <label htmlFor={inputName} className="text-input-container__label">
            {labelText}
        </label> 
        <input type={inputType} name={inputName} className="text-input-container__input"/>
    </div>
  </>
}

export default TextInput
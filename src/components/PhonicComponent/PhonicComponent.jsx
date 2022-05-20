import React, { useState } from "react";
import "./PhonicComponent.scss";

const PhonicComponent = ({phonicsArr}) => {

  const [index, setIndex] = useState(0);
  
  const handlePhonicChange = () => {
      setIndex(parseInt(Math.random() * phonicsArr.length-1));
  };

  return (
    <div className='phonic-component'>
      <h1 className='phonic-component__heading'>{phonicsArr[index]}</h1>
      <button onClick={handlePhonicChange}>Next</button>
    </div>
  )
}
export default PhonicComponent;
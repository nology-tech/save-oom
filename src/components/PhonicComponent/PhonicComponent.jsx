import React from "react";
import "./PhonicComponent.scss";

const PhonicComponent = ({ phonicText }) => {
  return (
    <div className="phonic-component">
      <h1 className="phonic-component__heading">{phonicText}</h1>
    </div>
  );
};
export default PhonicComponent;

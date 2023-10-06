import React, { useId } from "react";
import "./Input.scss";

const Input = ({ error, id, ...attributes }) => {
  const uniqueID = useId();
  return (
    <label
      className="input-component"
      htmlFor={`${id}_${uniqueID}`}>
      {error && <span className="text-error">{error}</span>}
      <input
        id={`${id}_${uniqueID}`}
        {...attributes}
      />
    </label>
  );
};

export default Input;

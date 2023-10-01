import React, { useId } from "react";

const Input = ({ id, className, ...attributes }) => {
  const uniqueID = useId();
  return (
    <label htmlFor={`${id}_${uniqueID}`} className={className}>
      <input
        id={`${id}_${uniqueID}`}
        className={"input-component " + className}
        {...attributes}></input>
    </label>
  );
};

export default Input;

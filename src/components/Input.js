import React from 'react';

const Input = ({ type, title, value, handleChange }) => {
  return (
    <input
      type={type}
      name={title}
      value={value.title}
      onChange={handleChange}
    ></input>
  );
};

export default Input;

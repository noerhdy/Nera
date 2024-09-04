import React from "react";

const Input = (props) => {
  const { type, placeholder, name, autoComplete, accept, onChange, classname } =
    props;
  return (
    <input
      type={type}
      className={` w-full  text-white ${classname} `}
      placeholder={placeholder}
      name={name}
      autoComplete={autoComplete}
      accept={accept}
      onChange={onChange}
    />
  );
};

export default Input;

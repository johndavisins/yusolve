import React from "react";

export default function Input({
  type,
  placeholder,
  name,
  required,
  register = () => {},
  validation,
  id,
  autoComplete = false,
  onClick,
  ref = () => {},
  value,
  noSelected = false,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      placeholder-shown={placeholder}
      name={name}
      id={name}
      required={required}
      autoComplete="off"
      disabled={noSelected}
      className="px-5 py-2 w-full placeholder:leading-normal placeholder:text-gray-400 placeholder:font-normal placeholder:text-sm focus:outline-white rounded-lg text-primary bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-30 text-white"
      {...register(name, validation)}
    />
  );
}

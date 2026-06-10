import React from "react";

export default function Textarea({
  type,
  placeholder,
  name,
  required,
  register = () => {},
  validation,
  autoComplete = false,
}) {
  return (
    <>
      <textarea
        type={type}
        placeholder={placeholder}
        placeholder-shown={placeholder}
        name={name}
        id={name}
        required={required}
        autoComplete="off"
        className="px-5 py-4 w-full placeholder:leading-normal placeholder:text-gray-400 placeholder:font-normal placeholder:text-sm focus:outline-white rounded-lg bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-30 text-white resize-none min-h-[160px]"
        {...register(name, validation)}
      ></textarea>
    </>
  );
}

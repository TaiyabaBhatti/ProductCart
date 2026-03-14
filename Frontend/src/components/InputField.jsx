import React from "react";

const InputField = ({ labelFor, message, type, register, errors,placeholder,value }) => {
  return (
    <>
      <div className="border-2 border-gray-400 rounded-xs p-2.5">
    <input
      type={type}
      label={placeholder}
      placeholder={placeholder}
      className="border-none outline-0 w-full"
      {...register(labelFor, {required:message})}
    />
    </div>
    </>
  
  );
};

export default InputField;

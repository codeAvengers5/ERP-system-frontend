import React from "react";

function InputField({ type, placeholder, name, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className={`bg-F5F8FA h-[40px] w-full rounded-small border-2 border-br_primary px-4 py-2 text-sm text-tx_secondary placeholder-tx_addtional focus:outline-none md:h-[51px]`}
    />
  );
}
export default InputField;

import React from "react";

const TextArea = ({ placeholder, name, value, onChange, rows, cols }) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      rows={rows}
      cols={cols}
      className="bg-F5F8FA w-full rounded-small border-2 border-br_primary px-4 py-2 text-sm text-tx_secondary placeholder-tx_addtional focus:outline-none"
    />
  );
};

export default TextArea;

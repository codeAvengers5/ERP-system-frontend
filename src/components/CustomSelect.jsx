import React from "react";

const CustomSelect = ({ onSelect, title, data, name }) => {
  let options = data.map((item, index) => (
    <option key={index} value={item.value} className="text-tx_secondary">
      {item.name}
    </option>
  ));

  return (
    <div>
      <select
        name={name}
        className={`h-[51px] w-full rounded-small border-2 border-br_primary bg-[#F5F8FA] px-4 py-2  text-sm focus:outline-none`}
        onChange={onSelect}
        defaultValue={""}>
        <option value="" className="text-tx_addtional" disabled>
          {title}
        </option>
        {options}
      </select>
    </div>
  );
};

export default CustomSelect;

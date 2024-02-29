import React from "react";

const FormWrapper = ({ onSubmit, children, className }) => {
  return (
    <form
      onSubmit={onSubmit}
      className={
        className ||
        "grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-[50px] md:gap-x-[100px] gap-y-[15px] p-4 max-w-full"
      }>
      {children}
    </form>
  );
};

export default FormWrapper;

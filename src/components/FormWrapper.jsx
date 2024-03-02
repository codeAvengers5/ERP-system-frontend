import React from "react";

const FormWrapper = ({ onSubmit, children, className }) => {
  return (
    <form
      onSubmit={onSubmit}
      className={
        className ||
        "grid max-w-full grid-flow-row grid-cols-1 gap-x-[50px] gap-y-[15px] p-4 md:grid-cols-2 md:gap-x-[100px]"
      }>
      {children}
    </form>
  );
};

export default FormWrapper;

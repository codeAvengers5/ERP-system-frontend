import React from "react";

const FormWrapper = ({ onSubmit, children, className }) => {
  return (
    <form
      onSubmit={onSubmit}
      className={
        className ||
        "grid w-full grid-cols-2 gap-x-[100px] gap-y-[15px] p-4 md:w-[580px] md:max-w-full"
      }>
      {children}
    </form>
  );
};

export default FormWrapper;

import React from "react";

const Button = ({ children, variant, size = "default", ...props }) => {
  let buttonSizeClass = "";

  if (size === "small") {
    buttonSizeClass = "h-[26px] w-full px-4 text-sm rounded-small";
  } else if (size === "large") {
    buttonSizeClass = "w-full h-12 px-10 rounded-large";
  } else {
    buttonSizeClass = "h-[60px] w-full px-15 rounded-small";
  }

  let classname = "";

  if (variant === "success") {
    classname = `${buttonSizeClass} flex flex-shrink-0 flex-wrap justify-center items-center gap-3 border border-none bg-bt_additional text-white hover:bg-green-600 hover:opacity-80 focus:outline-none focus:ring-meke-500 focus:ring-offset-0`;
  } else if (variant === "error") {
    classname = `${buttonSizeClass} flex flex-shrink-0 flex-wrap justify-center items-center gap-3 border border-none bg-bt_tertiary text-white hover:bg-red-600 hover:opacity-80 focus:outline-none focus:ring-meke-500 focus:ring-offset-0`;
  } else if (variant === "filter") {
    classname = `${buttonSizeClass} flex flex-shrink-0 flex-wrap justify-center items-center gap-3 border border-none bg-bt_secondary text-white hover:bg-red-600 hover:opacity-80 focus:outline-none focus:ring-meke-500 focus:ring-offset-0`;
  } else {
    classname = `${buttonSizeClass} flex flex-shrink-0 flex-wrap justify-center items-center gap-3 border border-none bg-bt_primary text-white hover:bg-blue-600 hover:opacity-80 focus:outline-none focus:ring-meke-500 focus:ring-offset-0`;
  }

  return (
    <button className={classname} {...props}>
      {children}
    </button>
  );
};

export default Button;

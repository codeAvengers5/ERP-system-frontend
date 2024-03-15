import React from "react";

export const CustomErrorViewer = ({ isShow, text }) => {
  return isShow && <p className="mt-1 text-sm text-meke-100">{text}</p>;
};

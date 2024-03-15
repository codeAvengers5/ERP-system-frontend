
import React from "react";

export const CustomErrorViewer= ({isShow,text}) => {
    return (
        isShow &&
        <p className="text-meke-100 mt-1 text-sm">{text}</p>
    ) 
}
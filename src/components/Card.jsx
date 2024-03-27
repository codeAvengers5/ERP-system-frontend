import React from "react";
const Displaycard = ({
  variant = "default",
  className,
  backgroundColor,
  paddingTop,
  margin,
  children
}) => {
  const baseProps = {
    className: "flex"
  };

  let selectedProps;

  if (variant === "card1") {
    selectedProps = {
      className: `${baseProps.className}  bg-[#F0F9FF]  min-w-[300px] md:w-5/6 min-h-[413px]`
    };
  } else if (variant === "card2") {
    selectedProps = {
      className: `${baseProps.className}  bg-meke-300 rounded-[1px] w-[300px] md:w-[580.38px] h-full md:min-h-[770px]`,
      style: { boxShadow: "0px 10px 40px 0px rgba(26, 104, 255, 0.13)" }
    };
  } else if (variant === "card3") {
    selectedProps = {
      className: `${baseProps.className}  bg-white rounded-[16px] w-[300px] md:w-[517.54px] h-full md:min-h-[311.612px]`
    };
  } else if (variant === "card4") {
    selectedProps = {
      className: `${baseProps.className} bg-white w-[300px] md:w-4/5 h-full md:min-h-[439px]`,
      style: { boxShadow: "0px 10px 40px 0px rgba(26, 104, 255, 0.13)" }
    };
  } else if (variant === "card5") {
    selectedProps = {
      className: `${baseProps.className} relative bg-meke-300 rounded-sm w-[300px] md:w-[580px] h-full md:min-h-[412px]`,
      style: { boxShadow: "0px 10px 40px 0px rgba(26, 104, 255, 0.13)" }
    };
  } else if (variant === "card6") {
    selectedProps = {
      className: `${baseProps.className}  bg-[#F8FCFF] w-[400px]  md:w-4/5 h-[100px] md:min-h-[339px]`,
      style: { boxShadow: "0px 10px 40px 0px rgba(26, 104, 255, 0.13)" }
    };
  } else if (variant === "card7") {
    selectedProps = {
      className: `${baseProps.className}  bg-[#E0F3FF]  md:w-5/6 min-h-[80px]`
    };
  } else {
    selectedProps = {
      // width: "auto",
      // height: "auto",
      // className: ` bg-white`,
      style: { boxShadow: "0px 10px 40px 0px rgba(26, 104, 255, 0.13)" }
    };
  }

  const containerStyle = {
    color: "#000",
    margin: margin || "40px",
    paddingTop: paddingTop || "0px",
    backgroundColor: backgroundColor || undefined, // Use backgroundColor prop if provided
    transition: "width 0.3s ease" // Optional transition effect
  };

  return (
    <div
      className={selectedProps.className || className}
      style={{ ...selectedProps.style, ...containerStyle }}>
      <div>{children}</div>
    </div>
  );
};

export default Displaycard;

import React from "react";
const Displaycard = ({
  variant = "default",
  width,
  height,
  className,
  style
}) => {
  const baseProps = {
    className: "flex "
  };

  let selectedProps;

  if (variant === "card1") {
    selectedProps = {
      width: "1036px",
      height: "365px",
      className: `${baseProps.className}  bg-[#F0F9FF]  `
    };
  } else if (variant === "card2") {
    selectedProps = {
      width: "580.38px",
      height: "730.05px",
      className: `${baseProps.className}  bg-meke-300 rounded-[1px] `,
      style: { boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }
    };
  } else if (variant === "card3") {
    selectedProps = {
      width: "517.54px",
      height: "311.612px",
      className: `${baseProps.className}  bg-white rounded-[16px]`
    };
  } else if (variant === "card4") {
    selectedProps = {
      width: "1043px",
      height: "427.597px",
      className: `${baseProps.className} bg-white rounded-[16px] `
    };
  } else if (variant === "card5") {
    selectedProps = {
      width: "580px",
      height: "411.257px",
      className: `${baseProps.className} relative bg-meke-300 rounded-sm`,
      style: { boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }
    };
  } else if (variant === "card6") {
    selectedProps = {
      width: "1036px;",
      height: "339px",
      className: `${baseProps.className}  bg-[#F8FCFF] `,
      style: { boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }
    };
  } else {
    selectedProps = {
      width: "448px",
      height: "597px",
      className: ` bg-white`,
      style: { boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }
    };
  }

  return (
    <div
      className={selectedProps.className}
      style={{
        ...selectedProps.style,
        ...style,
        width: width || selectedProps.width,
        height: height || selectedProps.height
      }}
    />
  );
};

export default Displaycard;

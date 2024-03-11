import React from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa6";

const Avatar = ({
  img,
  alt,
  square,
  border,
  initials,
  width = 50,
  height = 50
}) => {
  return (
    <ImageOptions
      img={img}
      initials={initials}
      square={square}
      border={border}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

const ImageOptions = ({
  img,
  alt,
  square,
  border,
  initials,
  width,
  height
}) => {
  if (img) {
    return (
      <Image
        className={`${square ? "rounded" : "rounded-full"} ${
          border ? "ring-2 ring-bt_primary" : ""
        }`}
        src={img}
        alt={alt}
        width={width}
        height={height}
      />
    );
  } else if (initials) {
    return (
      <div
        className={`flex items-center justify-center bg-bt_primary text-base font-extrabold uppercase text-tx_tertiary md:text-heading_2 ${
          square ? "rounded" : "rounded-full"
        } ${border ? "ring-2 ring-bt_primary" : ""}`}
        style={{ width, height }}>
        {initials}
      </div>
    );
  } else {
    return (
      <div
        className={`flex items-center justify-center bg-bg_secondary ${
          square ? "rounded" : "rounded-full"
        } ${border ? "ring-2 ring-bt_primary" : ""}`}
        style={{ width, height }}>
        <FaUser size={30} color="tx_secondary" />
      </div>
    );
  }
};

export default Avatar;

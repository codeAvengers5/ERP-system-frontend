"use client";
import { useState } from "react";
import Image from "next/image";
import Avatar from "./Avater";
import { notificationbell, search, outline } from "../../public/icons/index";

const Navbar = () => {
  const [isInputVisible, setInputVisible] = useState(false);
  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };
  return (
    <div className="z-999 max-w-screen sticky top-0 flex min-h-[73px] items-center justify-end bg-bg_primary">
      <div className="mr-4 flex items-center gap-9">
        <div className="relative flex items-center">
          <div className="hidden md:block">
            <input
              className="w-full rounded-md border border-bg_secondary bg-white px-4 py-2 pr-8 leading-tight text-tx_secondary focus:border-bg_additional focus:bg-white focus:outline-none"
              placeholder="search"
            />
            {/* <InputField
              type="text"
              placeholder="search"
              width={360}px // Customize the width as needed
            /> */}
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <div className="hidden md:block">
              <button>
                <Image src={search} alt="search icon" height={29} width={29} />
              </button>
            </div>
          </div>
        </div>

        <button className="md:hidden" onClick={toggleInputVisibility}>
          <Image src={search} alt="search icon" height={29} width={29} />
        </button>

        <div className="relative cursor-pointer">
          <Image
            src={notificationbell}
            alt="notification bell icon"
            width={24}
            height={24}
          />
        </div>
        <div className="relative cursor-pointer">
          <Image src={outline} alt="outline icon" width={24} height={24} />
        </div>
        <div className="relative items-center">
          <Avatar initials="BE" width={40} height={40} />
        </div>
      </div>

      {isInputVisible && (
        <div className="fixed left-0 top-[53px] z-50 w-full bg-white md:hidden">
          <div className="relative flex items-center">
            <input
              className="border-red-300 focus:border-gray-500 text-blue-500 w-full rounded-md border bg-white px-4 py-2 pr-8 leading-tight focus:bg-white focus:outline-none"
              placeholder="search"
            />
            {/* <InputField
              type="text"
              placeholder="search"
              width={500} // Customize the width as needed
            /> */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              <button onClick={toggleInputVisibility}>
                <Image src={search} alt="search icon" height={29} width={29} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

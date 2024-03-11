"use client";
import { useState } from "react";
import Image from "next/image";
import Avatar from "./Avater";
import { notificationbell, search, help } from "../../public/icons/index";

const Navbar = () => {
  const [isInputVisible, setInputVisible] = useState(false);
  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };
  return (
    <div className="sticky right-0 top-0 z-10 w-full bg-white">
      <div className="flex h-[73px] w-full items-center justify-end">
        <div className="mr-4 flex items-center gap-4 md:gap-8 ">
          <div className="relative flex items-center">
            <div className="hidden md:block">
              <input
                className="w-full rounded-md border border-bg_secondary bg-white px-4 py-2 pr-8 leading-tight text-tx_secondary focus:border-bg_additional focus:bg-white"
                placeholder="search"
              />
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              <div className="hidden md:block">
                <button>
                  <Image
                    src={search}
                    alt="search icon"
                    height={29}
                    width="auto"
                  />
                </button>
              </div>
            </div>
          </div>

          <button className="md:hidden" onClick={toggleInputVisibility}>
            <Image src={search} alt="search icon" height={29} width="auto" />
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
            <Image src={help} alt="help icon" width={24} height={24} />
          </div>
          <div className="relative items-center">
            <Avatar initials="BE" width={40} height={40} />
          </div>
        </div>
        {isInputVisible && (
          <div className="z-99999 fixed right-[10px] top-[60px] max-w-[200px] bg-white md:hidden">
            <div className="relative flex items-center">
              <input
                className="w-full rounded-md border border-bg_secondary bg-white px-4 py-2 pr-8 leading-tight text-tx_secondary focus:border-bg_additional focus:bg-white focus:outline-none"
                placeholder="search"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button onClick={toggleInputVisibility}>
                  <Image
                    src={search}
                    alt="search icon"
                    height={29}
                    width="auto"
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

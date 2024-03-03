import Button from "@/components/Button";
import React from "react";
import Image from "../../../../node_modules/next/image";
import { filter, plus } from "../../../../public/icons/index";

const page = () => {
  return (
    <div className="w-full">
      {/* <div className=""></div> */}
      <div className="flex flex-row items-end gap-5 px-12 ">
        <Button color="meke-550">
          <div className=" flex items-center justify-center gap-[39px] px-[25px]">
            <div className="h-6 w-6">
              <Image src={filter} alt="filter" />
            </div>
            <p className="font-['Roboto'] text-base font-normal text-black text-opacity-25">
              Filter
            </p>
          </div>
        </Button>
        <Button color="bt_primary">
          <div className=" flex  items-center justify-center gap-[39px] px-[15px]">
            <div className="h-6 w-6">
              {" "}
              <Image src={plus} alt="plus" />
            </div>
            <div className="font-['Roboto'] text-2xl font-normal text-white">
              Add New User
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default page;

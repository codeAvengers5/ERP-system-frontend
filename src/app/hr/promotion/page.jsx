"use client";
import React from "react";
import Image from "../../../../node_modules/next/image";
import { manager1, manager2, manager3 } from "../../../../public/images/index";
import { edit, delet, filter, plus } from "../../../../public/icons/index";
import Displaycard from "@/components/Card";
import Button from "@/components/Button";
const page = () => {
  const buttonStyle = {
    width: "200px",
    height: "50px"
  };
  return (
    <div className="lg:ml-12">
      <div className="ml-4 h-[0px] w-auto md:w-[1086px]"></div>
      <div className="mb-20 mt-16 hidden flex-row justify-end gap-5 px-12 md:flex ">
        <Button color="meke-550" style={buttonStyle}>
          <div className=" flex  items-center justify-center gap-[39px] px-[25px]">
            <div className="h-6 w-6">
              <Image src={filter} alt="filter" />
            </div>
            <p className="font-['Roboto'] text-base font-normal text-black text-opacity-25">
              Filter
            </p>
          </div>
        </Button>
        <Button color="bt_primary" style={buttonStyle}>
          <div className=" flex  items-center justify-center gap-[39px] px-[15px]">
            <div className="h-6 w-6">
              {" "}
              <Image src={plus} alt="plus" />
            </div>
            <div className="font-['Roboto'] text-2xl font-normal text-white">
              Add News
            </div>
          </div>
        </Button>
      </div>
      <div className="md:hidden">
        <div className="mt-6 flex justify-start pl-4">
          <div className="h-10 w-10">
            <Image src={filter} alt="filter" />
          </div>
          <div className="h-10 w-10">
            <Image src={filter} alt="filter" />
          </div>
        </div>
      </div>
      <Displaycard variant="card1" margin="10px" backgroundColor="#F0F9FF">
        <div className="flex flex-col gap-[70px] p-5">
          <div className="flex flex-shrink-0 flex-col gap-[7px]">
            <div className="flex font-['Inter'] text-lg font-normal text-black md:justify-end md:text-2xl">
              Date: 20-03-23
            </div>

            <div className="flex flex-row flex-wrap gap-2">
              <Image src={manager1} width={132} height={155} alt="image" />
              <Image src={manager2} width={132} height={155} alt="image" />
              <Image src={manager3} width={132} height={155} alt="image" />
            </div>
          </div>

          <div className=" h-auto font-['Roboto'] text-base font-normal leading-tight text-black sm:w-auto md:w-[863px] md:text-xl">
            We would like to thank Mr. Getnat Tadese, the CEO of the Ethiopian
            Press Organization, and the management members and staff of the
            Press Organization.Dear Commercial Bank of Ethiopia President Abe
            Sano, Board Members, Mr. Teklewold Atnafu, and All the Board
            Members: We are very appreciative that you visited our center, spoke
            with the elderly, and inquired about the building's condition. Thank
            you very much.We would like to thank Mr. Getnat Tadese, the CEO of
            the Ethiopian Press Organization, and the management members and
            staff of the Press.
          </div>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <button>
            <Image src={edit} width={24} height={24} alt="image" />
          </button>
          <p className="font-['Roboto'] text-base font-normal text-black text-opacity-25">
            Edit
          </p>
          <button>
            <Image src={delet} width={24} height={24} alt="image" />
          </button>
          <p className="font-['Roboto'] text-base font-normal text-black text-opacity-25">
            Delete
          </p>
        </div>
      </Displaycard>
    </div>
  );
};

export default page;

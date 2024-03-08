"use client";
import React from "react";
import Image from "../../../../node_modules/next/image";
import { promo1 } from "../../../../public/images/index";
import { filter, plus } from "../../../../public/icons/index";
import Displaycard from "@/components/Card";
import Button from "@/components/Button";
import { RiEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
const page = () => {
  const buttonStyle = {
    width: "200px",
    height: "60px"
  };
  const buttonStyle2 = {
    width: "100px",
    height: "40px"
  };
  return (
    <div className="lg:ml-12">
      <div className="mb-20 mr-[50px] mt-6 hidden flex-row justify-end gap-2 md:flex">
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
        <Button color="bt_primary" style={{ width: "300px", height: "60px" }}>
          <div className=" flex  items-center justify-center gap-[39px] px-[15px]">
            <div className="h-6 w-6">
              {" "}
              <Image src={plus} alt="plus" />
            </div>
            <div className="font-['Roboto'] text-xl font-normal text-white">
              Add Poromotion
            </div>
          </div>
        </Button>
      </div>
      <div className="mr-[25px] mt-6 flex justify-end gap-2 pl-4 md:hidden">
        <Button size="small" color="meke-550" style={buttonStyle2}>
          <Image src={filter} alt="filter" />
        </Button>
        <Button size="small" color="bt_primary" style={buttonStyle2}>
          <Image src={plus} alt="plus" />
        </Button>
      </div>
      <Displaycard variant="card1" margin="10px">
        <div className="mx-[20px] flex flex-col p-5 md:mx-[50px]">
          <div className="flex flex-col pb-[70px]">
            <div className="flex  justify-end p-5 md:gap-x-[420px]">
              <div className="font-['Inter'] text-base font-normal text-black md:text-heading_2">
                Date: 20-03-23
              </div>
            </div>

            <div className="flex flex-shrink-0 flex-row flex-wrap gap-2">
              <Image src={promo1} width={132} height={155} alt="image" />
              <Image src={promo1} width={132} height={155} alt="image" />
              <Image src={promo1} width={132} height={155} alt="image" />
            </div>
          </div>

          <div className=" h-auto w-full font-['Roboto'] text-base font-normal leading-tight text-black sm:w-auto md:text-heading_2">
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
        <div className="mx-[20px] mb-[5px] flex flex-row justify-end gap-5 px-5 md:mx-[50px] md:mb-[10px]">
          <button>
            <RiEditFill size={24} className="text-tx_primary" />
          </button>
          <p className="font-['Roboto'] text-base font-normal text-black text-opacity-25">
            Edit
          </p>
          <button>
            <MdDelete size={24} className="rounded text-bt_tertiary" />
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

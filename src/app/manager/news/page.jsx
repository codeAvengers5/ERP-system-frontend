"use client";
import React from "react";
import Link from "next/link";
import Image from "../../../../node_modules/next/image";
import { filter, plus } from "../../../../public/icons/index";
import Displaycard from "@/components/Card";
import Button from "@/components/Button";
import { RiEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { news1 } from "../../../../public/images/index";
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
      <div className="m-[10px] flex flex-row justify-between">
        <div className="m-1 flex items-center justify-center gap-2.5 rounded-[10px] bg-meke-550 p-2.5">
          <p className="font-['Inter'] text-xl font-normal text-white md:text-2xl">
            News
          </p>
        </div>
        <div className="flex h-[49px] w-[123px] items-center justify-center gap-2.5 rounded-[10px] p-2.5">
          <Link href="/manager/policy">
            <p className="font-['Inter'] text-xl font-normal text-black md:text-2xl">
              Policy
            </p>
          </Link>
        </div>
      </div>
      <div className="mx-[10px] border-[2px] border-meke-550"></div>
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
        <Button color="bt_primary" style={buttonStyle}>
          <div className=" flex  items-center justify-center gap-[39px] px-[15px]">
            <div className="h-6 w-6">
              {" "}
              <Image src={plus} alt="plus" />
            </div>
            <div className="font-['Roboto'] text-xl font-normal text-white">
              Add News
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
      <Displaycard variant="card1" margin="20px" paddingTop="10px">
        <div className="flex h-auto flex-col px-5">
          <div className="flex flex-col pb-[50px]">
            <div className="flex flex-col pb-[10px] md:flex-row md:gap-x-[320px]">
              <div className="font-primary text-heading_2 font-medium text-black md:text-heading_1">
                Ethiopian Press Visit Mekedoina
              </div>
              <div className="font-secondary text-base font-normal text-black md:text-heading_2">
                Date: 20-03-23
              </div>
            </div>
            <div className="flex flex-shrink-0 flex-row flex-wrap gap-2">
              <Image src={news1} width={132} height={155} alt="image" />
              <Image src={news1} width={132} height={155} alt="image" />
              <Image src={news1} width={132} height={155} alt="image" />
            </div>
          </div>
          <p className="w-full font-['Roboto'] text-base font-normal leading-tight text-black md:text-heading_2">
            We would like to thank Mr. Getnat Tadese, the CEO of the Ethiopian
            Press Organization, and the management members and staff of the
            Press Organization.Dear Commercial Bank of Ethiopia President Abe
            Sano, Board Members, Mr. Teklewold Atnafu, and All the Board
            Members: We are very appreciative that you visited our center, spoke
            with the elderly, and inquired about the building's condition. Thank
            you very much.We would like to thank Mr. Getnat Tadese, the CEO of
            the Ethiopian Press Organization, and the management members and
            staff of the Press Organization.Dear Commercial Bank of Ethiopia
            President Abe Sano, Board Members, Mr. Teklewold Atnafu, and All the
            Board Members: We are very appreciative that you visited our center,
            spoke with the elderly, and inquired about the building's condition.
            Thank you very much.
          </p>
        </div>
        <div className="flex flex-row justify-end gap-5 px-5">
          <button>
            <RiEditFill size={24} className="text-bt_additional" />
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

"use client";

import Displaycard from "@/components/Card";
import { Ellipse } from "../../../../../public/images/index";
import Image from "next/image";
import { profile } from "../../../../../public/images/index";
import Avatar from "@/components/Avater";
import { material } from "../../../../../public/images/index";
const Emp_Id = () => {
  return (
    <div className="flex justify-center">
      <Displaycard
        backgroundColor="white"
        className="h-full min-h-[530px] max-w-[350px]">
        <div className="flex flex-col gap-12">
          <div>
            <Image src={Ellipse} alt="news" />

            {/* Avatar and Line Container */}
            <div className="relative flex items-center justify-center">
              <div className="z-10">
                <Avatar
                  img={profile}
                  alt="hello"
                  width={100}
                  height={100}
                  border
                />
                <div className="flex flex-col items-center">
                  <p className="font-['Roboto'] text-base font-bold text-black">
                    Kebede Michael
                  </p>
                  <p className="font-['Roboto'] text-base font-regular">
                    Nurse
                  </p>
                </div>
              </div>
              <div className="absolute top-[40%] z-0 h-4 w-full -translate-y-2 transform bg-meke-200"></div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between">
            <div className="h-[70px] w-[20px] bg-meke-200"></div>
            <div className="flex w-[230px] flex-col gap-2">
              <div className="flex w-full flex-row items-start gap-6">
                <div className="flex w-[40%] justify-between">
                  <div className="font-['Roboto'] text-base font-bold text-black">
                    Phone
                  </div>
                  <div>:</div>
                </div>
                <div className="w-[60%] flex-grow font-['Roboto'] text-base font-regular">
                  0989898989
                </div>
              </div>
              <div className="flex w-full flex-row items-start gap-6">
                <div className="flex w-[40%] justify-between">
                  <div className="font-['Roboto'] text-base font-bold text-black">
                    Email
                  </div>
                  <div>:</div>
                </div>
                <div className="w-[60%] flex-grow font-['Roboto'] text-base font-regular">
                  b@gmail.com
                </div>
              </div>
              <div className="flex w-full flex-row items-start gap-6">
                <div className="flex w-[40%] justify-between">
                  <div className="font-['Roboto'] text-base font-bold text-black">
                    Role
                  </div>
                  <div>:</div>
                </div>
                <div className="w-[60%] flex-grow font-['Roboto'] text-base font-regular">
                  HrAdmin
                </div>
              </div>
            </div>
            <div className="h-[70px] w-[20px] bg-meke-200"></div>
          </div>

          <div className="mx-2 flex h-14 flex-row justify-center bg-meke-200 bg-opacity-5">
            <Image src={material} alt="barcode" />
            <Image src={material} alt="barcode" />
            <Image src={material} alt="barcode" />
            <Image src={material} alt="barcode" />
          </div>
        </div>
      </Displaycard>
    </div>
  );
};

export default Emp_Id;

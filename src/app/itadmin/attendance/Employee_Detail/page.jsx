import React from "react";
import Emp_Id from "../Employee_Id/page";
import Button from "@/components/Button";
import { RiEditFill } from "react-icons/ri";
export const page = () => {
  const buttonStyle = {
    width: "210px",
    height: "40px"
  };
  const buttonStyle2 = {
    width: "110px",
    height: "30px"
  };
  return (
    <div className="flex flex-row justify-center gap-24 pb-10">
      <div className="flex flex-col gap-7 p-4">
        <div className="pt-4 font-['Roboto'] text-heading_2 font-regular">
          Employee Detail
        </div>
        <div className="flex h-[500px] w-[450px] flex-col gap-5">
          <div className="flex flex-row justify-between bg-meke-300 p-2">
            <p className="font-['Roboto'] text-base font-bold text-black">
              Employee Name
            </p>
            <p>John Doe</p>
          </div>
          <div className="flex flex-row justify-between bg-meke-300 p-2">
            <p className="font-['Roboto'] text-base font-bold text-black">
              Email
            </p>
            <p>johndoe@example.com</p>
          </div>
          <div className="flex flex-row justify-between bg-meke-300 p-2">
            <p className="font-['Roboto'] text-base font-bold text-black">
              Role
            </p>
            <p>Human Resource</p>
          </div>
          <div className="flex flex-row justify-between bg-meke-300 p-2">
            <p className="font-['Roboto'] text-base font-bold text-black">
              Position
            </p>
            <p>Admin</p>
          </div>
          <div className="flex flex-row justify-between bg-meke-300 p-2">
            <p className="font-['Roboto'] text-base font-bold text-black">
              Gender
            </p>
            <p>Male</p>
          </div>
          <div className="flex flex-row justify-between bg-meke-300 p-2">
            <p className="font-['Roboto'] text-base font-bold text-black">
              Date of Birth
            </p>
            <p>2022-01-01</p>
          </div>
          <div className="flex flex-row justify-between bg-meke-300 p-2">
            <p className="font-['Roboto'] text-base font-bold text-black">
              Start Date
            </p>
            <p>2022-01-01</p>
          </div>
          <div className="flex flex-row justify-between bg-meke-300 p-2">
            <p className="font-['Roboto'] text-base font-bold text-black">
              Salary
            </p>
            <p>50,000</p>
          </div>
          <div className="flex justify-center p-8">
            <Button color="bt_primary" style={buttonStyle}>
              <div className=" flex gap-4 p-1">
                <RiEditFill size={24} />
                <div className="font-['Roboto'] text-lg font-normal text-white">
                  Edit Employee Info{" "}
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <Emp_Id />
        </div>
        <div className="flex flex-row justify-between px-10">
          <Button color="bt_primary" style={buttonStyle2}>
            <div className="font-['Roboto'] text-lg font-normal text-white">
              Print
            </div>
          </Button>
          <Button color="bt_secondary" style={buttonStyle2}>
            <div className="bt_secondary font-['Roboto'] text-lg font-normal text-white">
              Download
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default page;

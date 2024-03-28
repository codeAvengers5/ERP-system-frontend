import React from "react";
import Avatar from "@/components/Avater";
import { user } from "../../../../public/images/index";
const page = () => {
  return (
    <div className="w-370 flex justify-center py-20">
      <div className="flex flex-col gap-8">
        <div className="flex justify-end">
          {" "}
          <Avatar
            img={user}
            alt="User Avatar"
            square={true}
            border={true}
            width={300}
            height={300}
          />
        </div>
        <div className="flex h-[500px] w-[370px] flex-col gap-4">
          <div className="flex flex-row justify-between p-2">
            <p className="font-['Roboto'] text-base font-bold text-black">
              Name
            </p>
            <p>John Doe</p>
          </div>
          <div className="flex flex-row justify-between p-2">
            <p className="font-['Roboto'] text-base font-bold text-black">
              Email
            </p>
            <p>jon@gmail.com</p>
          </div>
          <div className="flex flex-row justify-between p-2">
            <p className="font-['Roboto'] text-base font-bold text-black">
              Role
            </p>
            <p>Human Resource</p>
          </div>
          <div className="flex flex-row justify-between p-2">
            <p className="font-['Roboto'] text-base font-bold text-black">
              Position
            </p>
            <p>Admin</p>
          </div>
          <div className="flex flex-row justify-between p-2">
            <p className="font-['Roboto'] text-base font-bold text-black">
              Time Arrived
            </p>
            <p>2:01</p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default page;

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
"use client";
import Button from "@/components/Button";
import React from "react";
import Image from "../../../../node_modules/next/image";
import { filter, plus } from "../../../../public/icons/index";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUserData } from "@/slices/auth";
import Text from "@/components/TextField";
import Link from "../../../../node_modules/next/link";
import { useSelector } from "../../../../node_modules/react-redux/dist/react-redux";

const page = () => {
  const buttonStyle = {
    width: "200px",
    height: "60px"
  };

  const buttonStyle2 = {
    width: "250px",
    height: "60px"
  };

  // const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);

  // useEffect(() => {
  //   dispatch(fetchUserData());
  // }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div className="mb-20 mt-6 flex flex-row justify-between">
        <Text className="ml-[65px] text-heading_1" content="All Users" />
        <div>
          <div className="mr-[50px] hidden flex-row justify-end gap-[20px] md:flex">
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
            <Link href="/itadmin/users/adduser">
              <Button color="bt_primary" style={buttonStyle2}>
                <div className=" flex  items-center justify-center gap-[39px] px-[15px]">
                  <div className="h-6 w-6">
                    <Image src={plus} alt="plus" />
                  </div>
                  <div className="font-['Roboto'] text-xl font-normal text-white">
                    Add New User
                  </div>
                </div>
              </Button>
            </Link>
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
        </div>
      </div>
    </div>
  );
};

export default page;

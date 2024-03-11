"use client";
import Button from "@/components/Button";
import React from "react";
import Image from "/next/image"
import { filter, plus } from "../../../public/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "@/slices/auth";
import Text from "@/components/TextField";
import Link from "../../../../node_modules/next/link";
import Table from "@/components/Table";

const page = () => {
  const buttonStyle = {
    width: "200px",
    height: "60px"
  };
  const buttonStyle2 = {
    width: "100px",
    height: "40px"
  };

  const sampleColumns = [
    { title: "", key: "profile" },
    { title: "Name", key: "name" },
    { title: "Role", key: "role" },
    { title: "Date Added", key: "dateAdded" },
    { title: "email", key: "email" },
    { title: "Action", key: "action" }
  ];

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  if (data) {
    console.log(data);
  }

  return (
    <div>
      <div className="m-[10px] flex flex-col justify-between">
        <Text
          className="ml-[65px] text-heading_2 md:text-heading_1"
          content="All Users"
        />
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
            <Link href="/it_admin/users/adduser">
              <Button
                color="bt_primary"
                style={{ width: "300px", height: "60px" }}>
                <div className=" flex  items-center justify-center gap-[39px] px-[15px]">
                  <div className="h-6 w-6">
                    {" "}
                    <Image src={plus} alt="plus" />
                  </div>
                  <div className="font-['Roboto'] text-xl font-normal text-white">
                    Add New User
                  </div>
                </div>
              </Button>
            </Link>
          </div>
          <div className="mr-[25px] mt-6 flex justify-end gap-2 pl-4 md:hidden">
            <Button size="small" color="meke-550" style={buttonStyle2}>
              <Image src={filter} alt="filter" />
            </Button>
            <Button size="small" color="bt_primary" style={buttonStyle2}>
              <Image src={plus} alt="plus" />
            </Button>
          </div>
        </div>
      </div>
      <div className="">
        <Table
          columns={sampleColumns}
          data={data}
          space="small"
          color="tx_secondary"
        />
      </div>
    </div>
  );
};

export default page;

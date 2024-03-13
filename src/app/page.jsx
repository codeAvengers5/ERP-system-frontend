/* eslint-disable import/no-duplicates */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-unresolved */
"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login_banner, logo } from "../../public/images/index";
import Text from "../components/TextField";
import Image from "../../node_modules/next/image";
// eslint-disable-next-line import/no-unresolved
import InputField from "@/components/InputField";
import Link from "../../node_modules/next/link";
import Button from "@/components/Button";
import FormWrapper from "@/components/FormWrapper";
import { login } from "@/slices/auth";
import userService from "@/services/user.service";
import { useRouter } from "../../node_modules/next/navigation";
const initialState = {
  email: "",
  password: ""
};

const page = () => {
  const [users, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const router = useRouter();

  const onInputChange = e => {
    const { name, value } = e.target;
    setUser({ ...users, [name]: value });
  };

  const { user, isLoggedIn } = useSelector(state => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      console.log(user, isLoggedIn);
      userService
        .getITAdminBoard()
        .then(response => {
          console.log(response.data);
          router.push(user.roleName);
        })
        .catch(error => {
          console.log(error);
          throw new Error("Unauthorized");
        });
    }
  }, [dispatch, isLoggedIn, router, user]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(users));
  };

  return (
    <div className="mx-[40px] my-[10px] flex max-h-[70vh] max-w-full flex-col items-center md:mx-[80px] md:my-[20px]">
      <div className="h-[150px] w-[150px] place-self-start md:h-[200px] md:w-[200px]">
        <Image src={logo} alt="mekedonia_logo" className="w-full" />
      </div>
      <div className="flex max-w-full flex-col gap-x-[100px] md:flex-row ">
        <FormWrapper
          className="flex max-w-[470px] flex-col justify-center gap-y-[30px]"
          onSubmit={handleSubmit}>
          <div>
            <Text
              className="font-primary text-heading_1 font-medium text-meke-900 md:text-[64px]"
              content="Hello Again!"
            />
            <Text
              className="font-primary text-sm font-light text-meke-900 md:text-base"
              content="please sign in to your account"
            />
          </div>

          <InputField
            type="text"
            placeholder="Enter your email"
            name="email"
            value={users.email}
            onChange={onInputChange}
          />
          <InputField
            type="password"
            placeholder="Enter your password"
            name="password"
            value={users.password}
            onChange={onInputChange}
          />
          <div className="flex w-full flex-col justify-end gap-[10px] align-middle md:flex-row">
            <Link href="/forgotpassword" className="text-sm text-tx_link">
              Forgotpassowrd?
            </Link>
          </div>
          <Button color="bt_primary" size="large">
            Login
          </Button>
        </FormWrapper>
        <div className="max-h-[700px] max-w-[700px] ">
          <Image src={login_banner} alt="login_banner" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default page;

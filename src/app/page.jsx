"use client";
import React from "react";
import { login_banner, logo } from "../../public/images/index";
import Text from "@/components/TextField";
import Image from "../../node_modules/next/image";
import InputField from "@/components/InputField";
import { useState } from "react";
import Link from "../../node_modules/next/link";
import Button from "@/components/Button";
import { useEffect } from "react";
import FormWrapper from "@/components/FormWrapper";

const initialState = {
  email: "",
  password: ""
};

const page = () => {
  const [user, setUser] = useState(initialState);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const rememberMeValue = localStorage.getItem("rememberMe") === "true";
    setRememberMe(rememberMeValue);
  }, []);

  const onInputChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleRememberMe = e => {
    setRememberMe(e.target.checked);
    localStorage.setItem("rememberMe", e.target.checked);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("user data", user);
    setUser(initialState);
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
            value={user.email}
            onChange={onInputChange}
          />
          <InputField
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user.password}
            onChange={onInputChange}
          />
          <div className="flex w-full flex-col justify-between gap-[10px] align-middle md:flex-row">
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 rounded border-0 text-white accent-meke-600 focus:ring-0"
                checked={rememberMe}
                onChange={handleRememberMe}
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 block text-sm text-tx_link">
                Remember me
              </label>
            </div>
            <Link href="/" className="text-sm text-tx_link">
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
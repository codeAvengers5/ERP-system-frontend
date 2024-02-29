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
  password: "",
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

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
    localStorage.setItem("rememberMe", e.target.checked);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("user data", user);
    setUser(initialState);
  };

  return (
    <div className="max-w-full flex flex-col items-center mx-[40px] md:mx-[80px] my-[10px] md:my-[20px] max-h-[70vh]">
      <div className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] place-self-start">
        <Image src={logo} alt="mekedonia_logo" className="w-full" />
      </div>
      <div className="flex max-w-full flex-col md:flex-row gap-x-[100px] ">
        <FormWrapper className="max-w-[470px] flex flex-col gap-y-[30px] justify-center" onSubmit={handleSubmit}>
        {/* <div className="max-w-[470px] flex flex-col gap-y-[30px] justify-center"> */}
          <div>
          <Text className="text-meke-900 text-heading_1 md:text-[64px] font-medium font-primary" content="Hello Again!" />
          <Text className="text-meke-900 text-sm md:text-base font-light font-primary" content="please sign in to your account" />
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
            <div className="flex justify-between align-middle w-full flex-col md:flex-row gap-[10px]">
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 text-white focus:ring-0 border-0 rounded accent-meke-600"
                checked={rememberMe}
                onChange={handleRememberMe}
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-tx_link">
                Remember me
              </label>
            </div>
              <Link href="/" className="text-tx_link text-sm">Forgotpassowrd?</Link>
            </div>
            <Button color="bt_primary" size="large">Login</Button>
        {/* </div> */}
        </FormWrapper>
        <div className="max-w-[700px] max-h-[700px] ">
        <Image src={login_banner} alt="login_banner" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default page;

"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login_banner, logo } from "../../public/images/index";
import Text from "../components/TextField";
import Image from "next/image";
import InputField from "@/components/InputField";
import Link from "next/link";
import Button from "@/components/Button";
import FormWrapper from "@/components/FormWrapper";
import { login } from "@/slices/auth";
import userService from "@/services/user.service";
import { validate } from "@/util/validate";
import { CustomErrorViewer } from "@/components/errorviwer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";
const PasswordChecklist = dynamic(() => import("react-password-checklist"), {
  ssr: false
});

const initialState = {
  email: "",
  password: ""
};

const Page = () => {
  const [users, setUser] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();

  const onInputChange = e => {
    const { name, value } = e.target;
    setUser({ ...users, [name]: value });
    const validationErrors = validate(users);
    setErrors(validationErrors);
  };

  const handleRememberMe = e => {
    setRememberMe(e.target.checked);
    localStorage.setItem("rememberMe", e.target.checked);
  };

  const { user, isLoggedIn, error } = useSelector(state => state.auth);

  useEffect(() => {
    const router = require("next/router").default;
    if (isLoggedIn) {
      console.log(user, isLoggedIn);
      userService
        .getITAdminBoard()
        .then(response => {
          console.log("this log", response.data);
          router.push(user.roleName);
        })
        .catch(error => {
          console.log("log error", error.response.status);
          throw new Error("Unauthorized");
        });
    }
  }, [dispatch, isLoggedIn, user]);
  useEffect(() => {
    if (error) {
      setLoginError(error);
      toast.error("Login Failed!");
    } else if (isLoggedIn) {
      // Handle the success status
      toast.success("Login successful!");
      // Perform any necessary actions on success
    }
  }, [error, isLoggedIn]);

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
          <span className="text-center  text-meke-200">{loginError}</span>
          <div>
            <Text
              className="font-primary text-heading_1 font-medium text-meke-900 md:text-[64px]"
              content="Hello Again!"
            />
            <Text
              className="font-primary text-sm font-light text-meke-900 md:text-base"
              content="Please sign in to your account"
            />
          </div>
          <div>
            <InputField
              type="text"
              placeholder="Enter your email"
              name="email"
              value={users.email}
              onChange={onInputChange}
            />
            <CustomErrorViewer
              isShow={errors.email !== ""}
              text={errors.email}
            />
          </div>
          <div>
            <InputField
              type="password"
              placeholder="Enter your password"
              name="password"
              value={users.password}
              onChange={onInputChange}
            />
            {!users.password ? (
              ""
            ) : (
              <PasswordChecklist
                className="text-sm"
                rules={["capital", "specialChar", "minLength", "number"]}
                minLength={8}
                value={users.password}
              />
            )}
          </div>
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
              Forgot Password?
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        className="absolute right-0 top-0 mt-20 w-[40px] max-w-sm p-4"
      />
    </div>
  );
};

export default Page;

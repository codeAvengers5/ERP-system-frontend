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
import { useRouter } from "../../node_modules/next/navigation";
const PasswordChecklist = dynamic(() => import("react-password-checklist"), {
  ssr: false
});

const initialState = {
  email: "",
  password: ""
};

const Page = () => {
  const [users, setUser] = useState(initialState);
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const dispatch = useDispatch();

  const onInputChange = e => {
    const { name, value } = e.target;
    setUser({ ...users, [name]: value });
    const validationErrors = validate(users);
    setErrors(validationErrors);
  };

  const { user, valid, isLoggedIn, error } = useSelector(
    state => state.auth
  );

  useEffect(() => {
    const proceedSteps = () => {
      if (isLoggedIn) {
        const id = user.accountId;
        const enable = user.enable2fa;
  
        if (!enable) {
          router.push(`/enable2fa/${id}`, () => {
            if (!valid) {
              router.push(`/verfiy2fa/${id}`, () => {
                router.push(`/${user.roleName}/dashboard`);
              });
            } else {
              router.push(`/${user.roleName}/dashboard`);
            }
          });
        } else if (!valid) {
          router.push(`/verfiy2fa/${id}`, () => {
            router.push(`/${user.roleName}/dashboard`);
          });
        } else {
          router.push(`/${user.roleName}/dashboard`);
        }
      }
    };
  
    proceedSteps();
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
          <div className="w-full sm:max-w-md">
            <Link href="/forgotpassword" className="text-sm text-tx_link">
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

"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FormWrapper from "@/components/FormWrapper";
import Button from "@/components/Button";
import { resetPassword, resetState } from "@/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "../../../../../node_modules/next/navigation";
import { clearMessage } from "@/slices/message";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from "@/components/InputField";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successful, setSuccessful] = useState(false);
  const { id, token } = useParams();

  const { isLoading, msg, error } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    setErrorMessage("");

    const resetData = {
      id, // Replace with the actual user ID
      token, // Replace with the actual reset token
      password
    };

    if (!id || !token) {
      return <div>Invalid reset link</div>;
    }

    dispatch(resetPassword(resetData))
      .then(() => {
        setSuccessful(true);
        setPassword("");
        setConfirmPassword("");
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  useEffect(() => {
    if (msg) {
      toast.success(msg, {
        position: "top-center",
        autoClose: 3000, //3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition: Slide
      });
      router.push("/");
    }
  }, [msg]);

  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  return (
    <div className="mx-auto flex h-screen w-screen flex-col items-center justify-center px-6 py-8 lg:py-0">
      <div className="dark:bg-gray-100 dark:border-gray-700 w-full rounded-lg bg-white p-6 shadow sm:max-w-md sm:p-8 md:mt-0">
        <h2 className="mt-6 text-center text-3xl font-bold  text-bt_primary">
          Change Password
        </h2>
        <FormWrapper
          className="mt-4 flex flex-col space-y-4 md:space-y-5 lg:mt-5"
          onSubmit={handleSubmit}>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <InputField
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
              className="border-gray-300 placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 relative block w-full appearance-none rounded-none rounded-b-md border px-3 py-2 focus:z-10 focus:outline-none sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="sr-only">
              Confirm Password
            </label>
            <InputField
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="current-password"
              onChange={e => setConfirmPassword(e.target.value)}
              className="border-gray-300 placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 relative block w-full appearance-none rounded-none rounded-b-md border px-3 py-2 focus:z-10 focus:outline-none sm:text-sm"
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <Button type="submit" color="bt_primary" size="large">
              Reset Password
            </Button>
          </div>
        </FormWrapper>
        <ToastContainer limit={2} />
      </div>
    </div>
  );
}

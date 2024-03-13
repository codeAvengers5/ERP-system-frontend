"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "../../../node_modules/next/navigation";
import { forgotPassword, resetState } from "@/slices/auth";
import Button from "@/components/Button";
import FormWrapper from "@/components/FormWrapper";
import InputField from "@/components/InputField";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [successful, setSuccessful] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const { loading, success, error } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const handleSubmit = e => {
    e.preventDefault();

    if (!email) {
      return;
    }

    dispatch(forgotPassword({ email: email }))
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      router.push("/verify");
    }
  }, [success]);

  return (
    <div className="mx-auto flex h-screen min-h-screen items-center justify-center px-6 py-8 lg:py-0">
      <div className="w-full rounded-md bg-white p-6 shadow-lg sm:max-w-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-bt_primary">
          Forgot Password
        </h1>
        <FormWrapper className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="text-gray-700 mb-2  block  text-base"
              htmlFor="email">
              Email
            </label>
            <InputField
              className="border-gray-300 focus:border-blue-500 w-full rounded-md border px-3 py-2 focus:outline-none"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <Button
            //   className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            color="bt_primary"
            size="large"
            type="submit">
            Send
          </Button>
        </FormWrapper>
      </div>
    </div>
  );
}

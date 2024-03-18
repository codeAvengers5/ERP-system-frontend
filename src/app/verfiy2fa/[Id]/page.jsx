/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { verify2FA } from "../../../slices/auth";
import InputField from "../../../components/InputField";
import Button from "../../../components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [image, setImage] = useState(null);
  const router = useRouter();

  const dispatch = useDispatch();
  const { Id } = useParams();

  const { user, data2fa, error } = useSelector(state => state.auth);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(verify2FA({ Id, verificationCode })).then(() => {
      toast.success("confrimed!");
      router.push("/");
    });

    if (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    setEnabled(user.enable2fa);
    if (data2fa) {
      setImage(data2fa.qrCodeUrl);
    }
  }, [data2fa, dispatch, enabled, user]);

  return (
    <div className="mx-auto flex h-screen w-screen flex-col items-center justify-center px-6 py-8 lg:py-0">
      <div className="dark:bg-gray-100 dark:border-gray-700 w-full rounded-lg bg-white p-6 shadow sm:max-w-md sm:p-8 md:mt-0">
        {!enabled && (
          <div className="mx-auto justify-center text-center">
            <p>Scan the QR code on your authenticator app</p>
            <img className="mx-auto" src={image} alt="img" />
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <InputField
            id="verificationCode"
            label="Verification code"
            type="text"
            value={verificationCode}
            onChange={e => setVerificationCode(e.target.value)}
          />

          <Button type="submit" color="bt_primary">
            Confirm
          </Button>

          <ToastContainer
            limit={1}
            position="top-right"
            autoClose={3000}
            className="absolute right-0 top-0 mt-20 w-[40px] max-w-sm p-4"
          />
        </form>
      </div>
    </div>
  );
};

export default Page;

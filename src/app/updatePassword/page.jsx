"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "@/slices/auth";
import { CustomErrorViewer } from "@/components/errorviwer";
import { validate } from "@/util/validate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Text from "@/components/TextField";
import FormWrapper from "@/components/FormWrapper";
import dynamic from "next/dynamic";
import { getTokenFromCookie } from "@/util/cookie";
import { decodeJwtToken } from "@/util/decodetoken";
const PasswordChecklist = dynamic(() => import("react-password-checklist"), {
  ssr: false
});

const Page = () => {
  const [passwordMismatchError, setPasswordMismatchError] = useState(false);
  const { loading, error, success } = useSelector(state => state.auth);
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  let id = "";
  const token = getTokenFromCookie();
  const decodedToken = decodeJwtToken(token);
  if (decodedToken) {
    const jsonString = decodedToken.split(";")[0];
    const decoded = JSON.parse(jsonString);
    id = decoded.userInfo.accountId;
  }
  const [signupError, setSignupError] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      toast.success("Password has been updated successfully");
    }
    if (error) {
      toast.error(error);
    }
  }, [success, error]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (formData.confirmPassword !== formData.newPassword) {
      setPasswordMismatchError(true);
      return;
    }

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    const { oldPassword, newPassword } = formData;

    const payload = { id, oldPassword, newPassword };

    try {
      await dispatch(updatePassword(payload));
      // Clear form data on successful update
      setFormData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
    } catch (error) {
      toast.error(error.message);
      setSignupError("Unable to reset password, please try again");
    }
  };

  const onInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const validationErrors = validate(formData);
    setErrors(validationErrors);
  };

  return (
    <div className="flex justify-center">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        className="absolute right-0 top-0 mt-20 w-[40px] max-w-sm p-4"
      />
      <div>
        <FormWrapper
          onSubmit={handleSubmit}
          className="flex w-[470px] flex-col gap-5 py-16 pl-3">
          <div className="text-center font-['Inter'] text-heading_1 font-medium leading-10 text-black md:text-2xl">
            Update password
          </div>
          <div>
            <Text className="pb-[5px] md:pb-[10px]" content="Old Password" />
            <InputField
              type="password"
              placeholder="Enter your old password"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={onInputChange}
            />
            <CustomErrorViewer
              isShow={errors.password !== ""}
              text={errors.password}
            />
          </div>
          <div>
            <Text className="pb-[5px] md:pb-[10px]" content="New Password" />
            <InputField
              type="password"
              placeholder="Enter your new password"
              name="newPassword"
              value={formData.newPassword}
              onChange={onInputChange}
            />
            {!formData.newPassword ? (
              ""
            ) : (
              <PasswordChecklist
                className="text-sm"
                rules={["capital", "specialChar", "minLength", "number"]}
                minLength={8}
                value={formData.newPassword}
              />
            )}
          </div>
          <div>
            <Text
              className="pb-[5px] md:pb-[10px]"
              content="Confirm Password"
            />
            <InputField
              type="password"
              placeholder="Confirm your new password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={onInputChange}
            />
            {!formData.confirmPassword ? (
              ""
            ) : (
              <PasswordChecklist
                className="text-sm"
                rules={["capital", "specialChar", "minLength", "number"]}
                minLength={8}
                value={formData.confirmPassword}
              />
            )}
          </div>
          <div>
            <Button
              color="bt_primary"
              type="submit"
              size="large"
              disabled={loading}>
              {loading ? "Adding..." : " Update Password"}
            </Button>
          </div>
        </FormWrapper>
      </div>
    </div>
  );
};

export default Page;

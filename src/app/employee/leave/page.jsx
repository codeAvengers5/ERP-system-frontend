"use client";
import Link from "next/link";
import { createLeave } from "@/slices/leave";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@/components/Button";
import Displaycard from "@/components/Card";
import CustomSelect from "@/components/CustomSelect";
import FormWrapper from "@/components/FormWrapper";
import InputField from "@/components/InputField";
import Text from "@/components/TextField";
import { clearMessage } from "@/slices/message";
import { validate } from "@/util/validate";
import { CustomErrorViewer } from "@/components/errorviwer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  full_name: "",
  duration: "",
  leave_date: "",
  detail: ""
};

const page = () => {
  const [emp, setEmp] = useState(initialState);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { success, loading, error } = useSelector(state => state.leave);
  const [signupError, setSignupError] = useState("");

  useEffect(() => {
    if (success) {
      toast.success("Leave request created successfully");
      setEmp(initialState);
    }
    if (error) {
      // console.log("thithi",error)
      setSignupError(error);

      toast.error(error);
    }
  }, [success, error, dispatch]);

  const onInputChange = e => {
    const { name, value } = e.target;
    setEmp({ ...emp, [name]: value });
    const validationErrors = validate(emp);
    setErrors(validationErrors);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await dispatch(createLeave(emp));
      setEmp(initialState);
      setSignupError("");
    } catch (error) {
      setSignupError(error.message || "Failed to request");
      console.error("Error creating leave application:", error);
    }
    // }
  };

  const Permission_Detail = [
    { name: "Sick Leave", value: "Sick Leave" },
    { name: "Annual Leave", value: "Annual Leave" },
    { name: "maternity Leave", value: "Maternity Leave" },
    { name: "Religious reason", value: "Religious reasons" },
    {
      name: "Death in the family or friend",
      value: "Death in the family or friend"
    }
  ];

  return (
    <div>
      <div className="flex flex-row justify-between px-14 py-4 sm:justify-start sm:gap-20 sm:pl-56 sm:pt-12">
        <p className="font-['Inter'] text-xl font-normal text-meke-550 md:text-2xl">
          Leave Application
        </p>

        <Link href="/">
          <p className="font-['Inter'] text-xl font-normal text-black md:text-2xl">
            Status
          </p>
        </Link>
      </div>
      <div className="flex justify-center">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          className="absolute right-0 top-0 mt-20 w-[40px] max-w-sm p-4"
        />

        <Displaycard variant="card2">
          <span className="text-center  text-meke-200">{signupError}</span>
          <FormWrapper
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 px-3 py-16">
            <div>
              <Text className="pb-[5px] md:pb-[10px]" content="Full Name" />
              <InputField
                type="text"
                placeholder="Enter full name of employee"
                name="full_name"
                value={emp.full_name}
                onChange={onInputChange}
              />
              <CustomErrorViewer
                isShow={errors.full_name != ""}
                text={errors.full_name}
              />
            </div>

            <div>
              <Text className="pb-[5px] md:pb-[10px]" content="Duration" />
              <InputField
                type="text"
                placeholder="Enter the duration"
                name="duration"
                value={emp.duration}
                onChange={onInputChange}
              />
              <CustomErrorViewer
                isShow={errors.duration != ""}
                text={errors.duration}
              />
            </div>

            <div>
              <Text className="pb-[14px]" content="Leave start date" />
              <InputField
                type="date"
                placeholder="Select the date to leave"
                name="leave_date"
                value={emp.leave_date}
                onChange={onInputChange}
              />
              <CustomErrorViewer
                isShow={errors.leave_date != ""}
                text={errors.leave_date}
              />
            </div>

            <div>
              <Text
                className="pb-[5px] md:pb-[10px]"
                content=" Permission detail"
              />
              <CustomSelect
                data={Permission_Detail}
                value={emp.permission_detail}
                name="detail"
                title="Enter reasons for the leave"
                onSelect={onInputChange}
              />
              <CustomErrorViewer
                isShow={errors.detail != ""}
                text={errors.detail}
              />
            </div>
            <div className="w-[250px] md:w-[550px]"></div>

            <div>
              <Button
                color="bt_primary"
                type="submit"
                size="large"
                disabled={loading}>
                {loading ? "Adding..." : "submit"}
              </Button>
            </div>
          </FormWrapper>
        </Displaycard>
      </div>
    </div>
  );
};

export default page;

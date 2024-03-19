"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createJobPost, clearStatus } from "@/slices/job";
import { CustomErrorViewer } from "@/components/errorviwer";
import Button from "@/components/Button";
import Displaycard from "@/components/Card";
import TextArea from "@/components/TextArea";
import InputField from "@/components/InputField";
import Text from "@/components/TextField";
import FormWrapper from "@/components/FormWrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validate } from "@/util/validate";
import { useRouter } from "../../../../../node_modules/next/navigation";

const initialState = {
  title: "",
  description: "",
  requirement: "",
  responsibility: "",
  closingDate: "",
  salary: ""
};

const Page = () => {
  const [job, setJob] = useState(initialState);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, success, error } = useSelector(state => state.jobPost);
  const [signupError, setSignupError] = useState("");

  useEffect(() => {
    if (success) {
      toast.success("Job post created successfully");
      setJob(initialState);
      dispatch(clearStatus());
      router.push("/hradmin/job_vacancy");
    }
    if (error) {
      toast.error(error);
      setSignupError("Failed to create job post");
      dispatch(clearStatus());
    }
  }, [success, error, dispatch]);

  const onInputChange = e => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
    const validationErrors = validate(job);
    setErrors(validationErrors);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createJobPost(job));
  };

  return (
    <div className="flex justify-center">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        className="absolute  right-0 top-0 mt-20 w-[40px]  max-w-sm p-4"
      />
      <Displaycard variant="card2">
        <FormWrapper
          onSubmit={handleSubmit}
          className="m-[20px] flex flex-col gap-5">
          <span className="text-center  text-meke-200">{signupError}</span>
          <div>
            <Text className="pb-[5px] md:pb-[10px]" content="Title_of_job" />
            <InputField
              type="text"
              placeholder="Enter Title of job"
              name="title"
              value={job.title}
              onChange={onInputChange}
            />
            {/* Display validation errors */}
            {errors.title && (
              <CustomErrorViewer isShow={true} text={errors.title} />
            )}
          </div>
          <div>
            <Text className="pb-[5px] md:pb-[10px]" content="Description" />
            <TextArea
              placeholder="Describe about job?"
              name="description"
              value={job.description}
              onChange={onInputChange}
              rows={3}
              cols={1}
            />
            {errors.description && (
              <CustomErrorViewer isShow={true} text={errors.description} />
            )}
          </div>
          <div>
            <Text className="pb-[5px] md:pb-[10px]" content="Requirement" />
            <TextArea
              rows={3}
              cols={1}
              type="text"
              placeholder="What are the Requirements?"
              name="requirement"
              value={job.requirement}
              onChange={onInputChange}
            />
            {errors.requirement && (
              <CustomErrorViewer isShow={true} text={errors.requirement} />
            )}
          </div>
          <div>
            <Text className="pb-[5px] md:pb-[10px]" content="Responsibility" />
            <TextArea
              rows={3}
              cols={1}
              type="text"
              placeholder="Responsibility"
              name="responsibility"
              value={job.responsibility}
              onChange={onInputChange}
            />
            {errors.responsibility && (
              <CustomErrorViewer isShow={true} text={errors.responsibility} />
            )}
          </div>
          <div>
            <Text className="pb-[5px] md:pb-[10px]" content="Closing date" />
            <InputField
              type="date"
              placeholder="Enter occupation of the employee"
              name="closingDate"
              value={job.closingDate}
              onChange={onInputChange}
            />
            <CustomErrorViewer
              isShow={errors.start_date != ""}
              text={errors.start_date}
            />
          </div>
          <div>
            <Text className="pb-[5px] md:pb-[10px]" content="Salary/Wage" />
            <InputField
              type="text"
              placeholder="Enter salary of the employee"
              name="salary"
              value={job.salary}
              onChange={onInputChange}
            />
            {errors.salary && (
              <CustomErrorViewer isShow={true} text={errors.salary} />
            )}
          </div>
          <div className="w-[250px] md:w-[550px]"></div>
          <div>
            <Button
              color="bt_primary"
              type="submit"
              size="large"
              disabled={loading}>
              {loading ? "Adding..." : "Add Job Vacancy"}
            </Button>
          </div>
        </FormWrapper>
      </Displaycard>
    </div>
  );
};

export default Page;

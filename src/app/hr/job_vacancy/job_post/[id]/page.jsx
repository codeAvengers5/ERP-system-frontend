"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createJobPost, clearStatus } from "@/slices/job";
import { updateExistingJobPost } from "@/slices/job";
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
import { getJobPostById } from "@/services/job.service";
const Page = ({ params }) => {
  const [job, setJob] = useState({
    title: "",
    description: "",
    requirement: "",
    responsibility: "",
    salary: ""
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const [signupError, setSignupError] = useState("");
  const { loading, success, error } = useSelector(state => state.jobPost);
  const id = params.id;
  console.log(id);
  useEffect(() => {
    if (id) {
      const fetchJobPost = async () => {
        try {
          const jobPost = await getJobPostById(id);
          console.log("title", jobPost.data.title);
          setJob({
            title: jobPost.data.title,
            description: jobPost.data.description,
            requirement: jobPost.data.requirement,
            responsibility: jobPost.data.responsibility,
            salary: jobPost.data.salary
          });
        } catch (error) {
          console.error("Error fetching job post:", error);
        }
      };
      fetchJobPost();
    }
  }, [id]);

  const onInputChange = e => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
    const validationErrors = validate(job);
    setErrors(validationErrors);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (id) {
      const jobData = {
        ...job,
        id // Add the ID to the job data
      };
      dispatch(updateExistingJobPost(jobData));
    } else {
      dispatch(createJobPost(job));
    }
  };

  useEffect(() => {
    if (success) {
      toast.success("Job post updated successfully");
      setTimeout(() => {
        window.location.href = "/hr/job_vacancy"; // Navigate to jobvacancy page after delay
      }, 2000); // 2000 milliseconds (2 seconds) delay
      dispatch(clearStatus());
    }
    if (error) {
      toast.error(error);
      dispatch(clearStatus());
    }
  }, [success, error, dispatch]);

  return (
    <div className="flex justify-center">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        className="absolute  right-0 top-0 mt-20 w-[40px]  max-w-sm p-4"
      />
      <Displaycard variant="card2">
        <FormWrapper
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 py-4 pl-3">
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
              rows={5}
              cols={1}
            />
            {errors.description && (
              <CustomErrorViewer isShow={true} text={errors.description} />
            )}
          </div>
          <div>
            <Text className="pb-[5px] md:pb-[10px]" content="Requirement" />
            <TextArea
              rows={5}
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
              rows={5}
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
              {loading ? "Adding..." : "Update Job Vacancy"}
            </Button>
          </div>
        </FormWrapper>
      </Displaycard>
    </div>
  );
};

export default Page;

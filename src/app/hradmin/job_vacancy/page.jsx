"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { getAllJobPosts, deleteJobPost } from "@/services/job.service";
import { clearStatus, deleteExistingJobPost } from "@/slices/job";
import { delet, filter, plus } from "../../../../public/icons/index";
import Displaycard from "@/components/Card";
import Button from "@/components/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteConfirmationModal from "@/components/deleteconfirm";
import moment from "moment";
import { RiEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { RxTimer } from "react-icons/rx";

const JobPage = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const buttonStyle = {
    width: "200px",
    height: "60px"
  };
  const buttonStyle2 = {
    width: "100px",
    height: "40px"
  };

  useEffect(() => {
    async function fetchJobPosts() {
      try {
        const data = await getAllJobPosts();
        setJobPosts(data);
      } catch (error) {
        console.error("Error fetching job posts:", error);
      }
    }

    fetchJobPosts();
  }, []);

  const handleDeleteJobPost = jobId => {
    setSelectedJobId(jobId);
    setShowConfirmationModal(true);
  };

  const confirmDeleteJobPost = async () => {
    try {
      dispatch(deleteExistingJobPost(selectedJobId));
      toast.success("Job post deleted successfully");
      setShowConfirmationModal(false);
      setTimeout(() => {
        window.location.reload();
      }, 3500);
    } catch (error) {
      console.error("Error deleting job post:", error);
      toast.error("Failed to delete job post");
      setShowConfirmationModal(false);
    }
  };

  const cancelDeleteJobPost = () => {
    setShowConfirmationModal(false);
  };

  return (
    <div className="lg:ml-12">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        className="absolute  right-0 top-0 mt-20 w-[40px]  max-w-sm p-4"
      />
      <div className="mb-20 mr-[50px] mt-6 hidden flex-row justify-end gap-2 md:flex">
        <Button color="meke-550" style={buttonStyle}>
          <div className=" flex  items-center justify-center gap-[39px] px-[25px]">
            <div className="h-6 w-6">
              <Image src={filter} alt="filter" />
            </div>
            <p className="font-['Roboto'] text-base font-normal text-black text-opacity-25">
              Filter
            </p>
          </div>
        </Button>
        <Button color="bt_primary" style={{ width: "300px", height: "60px" }}>
          <div className=" flex  items-center justify-center gap-[39px] px-[15px]">
            <div className="h-6 w-6">
              {" "}
              <Image src={plus} alt="plus" />
            </div>
            <Link href="/hradmin/job_vacancy/jobpost">
              <div className="font-primary text-xl font-normal text-white">
                Add Job Vacancy
              </div>
            </Link>
          </div>
        </Button>
      </div>
      <div className="mr-[25px] mt-6 flex justify-end gap-2 pl-4 md:hidden">
        <Button size="small" color="meke-550" style={buttonStyle2}>
          <Image src={filter} alt="filter" />
        </Button>
        <Link href="/hradmin/job_vacancy/jobpost">
          <Button size="small" color="bt_primary" style={buttonStyle2}>
            <Image src={plus} alt="plus" />
          </Button>
        </Link>
      </div>
      {jobPosts.map(jobPost => (
        <Displaycard variant="card4" key={jobPost._id}>
          <div className="flex w-full flex-col px-[20px] md:px-[50px]">
            {/* <div className="flex flex-col "> */}
            <div className="flex flex-col items-center justify-between p-5 md:flex-row ">
              <div className="font-primary text-base font-bold text-black md:text-heading_1">
                {jobPost.title}
              </div>
              <div className="font-primary text-base font-normal text-black md:text-heading_2">
                Date: {moment(jobPost.closingDate).format("MMMM Do, YYYY")}
              </div>
            </div>
            {/* </div> */}
            <div className="h-auto w-full font-primary text-sm font-normal leading-tight text-black md:text-base">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-start gap-6 md:flex-row">
                  <div className="w-[20%] font-bold md:text-heading_2">
                    Description:
                  </div>
                  <div className="w-[80%] flex-grow ">
                    {jobPost.description}
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-6 md:flex-row">
                  <div className="w-[20%] font-bold md:text-heading_2">
                    Requirement:
                  </div>
                  <div className="w-[80%] flex-grow">{jobPost.requirement}</div>
                </div>
                <div className="flex w-full flex-col items-start gap-6 md:flex-row">
                  <div className="w-[20%] font-bold md:text-heading_2">
                    Responsibility:
                  </div>
                  <div className="w-[80%] flex-grow">
                    {jobPost.responsibility}
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-6 md:flex-row">
                  <div className="w-[20%] font-bold md:text-heading_2">
                    Salary/Wage:
                  </div>
                  <div className="w-[80%] flex-grow">{jobPost.salary} ETB</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-[5px] flex flex-col justify-between gap-[10px] px-[20px] md:mb-[10px] md:flex-row md:px-[50px]">
            <div className="mt-2 flex w-[100px] flex-row gap-[5px] rounded-full bg-meke-600 p-[10px] font-bold text-white">
              <RxTimer size={24} />
              <p>{jobPost.status}</p>
            </div>
            <div className="flex flex-row items-center">
              <Link
                href={`/hradmin/job_vacancy/job_post/${jobPost._id}`}
                className="flex min-w-[100px] cursor-pointer gap-[5px]">
                <button>
                  <RiEditFill size={24} className="text-bt_additional" />
                </button>
                <p className="font-primary text-base font-normal text-black text-opacity-25">
                  Edit
                </p>
              </Link>
              <button
                onClick={() => handleDeleteJobPost(jobPost._id)}
                className="flex min-w-[100px] gap-[5px]">
                <MdDelete size={24} className="rounded text-bt_tertiary" />
                <p className="font-primary text-base font-normal text-black text-opacity-25">
                  Delete
                </p>
              </button>
            </div>
          </div>
        </Displaycard>
      ))}
      {/* Confirmation Modal */}
      <DeleteConfirmationModal
        show={showConfirmationModal}
        onClose={cancelDeleteJobPost}
        onConfirm={confirmDeleteJobPost}
      />
    </div>
  );
};

export default JobPage;

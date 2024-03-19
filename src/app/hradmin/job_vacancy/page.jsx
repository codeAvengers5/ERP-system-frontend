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

const JobPage = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const buttonStyle = {
    width: "200px",
    height: "50px"
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
      await deleteJobPost(selectedJobId);

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
      <div className="mb-20 mt-6 hidden flex-row justify-end gap-2 px-12 md:flex">
        <Button color="meke-550" style={buttonStyle}>
          <div className="flex items-center justify-center gap-[39px] px-[25px]">
            <div className="h-6 w-6">
              <Image src={filter} alt="filter" />
            </div>
            <p className="font-['Roboto'] text-base font-normal text-black text-opacity-25">
              Filter
            </p>
          </div>
        </Button>
        <Button color="bt_primary" style={buttonStyle}>
          <div className="flex items-center justify-center gap-[5px] px-[15px]">
            <div className="h-6 w-6">
              <Image src={plus} alt="plus" />
            </div>
            <Link href="/hr/job_vacancy/jobpost">
              <div className="font-['Roboto'] text-xl font-normal text-white">
                Add Job Vacancy
              </div>
            </Link>
          </div>
        </Button>
      </div>
      {jobPosts.map(jobPost => (
        <Displaycard key={jobPost._id} backgroundColor="#F0F9FF">
          <div className="flex flex-col gap-[10px] p-5">
            <div className="flex flex-shrink-0 flex-col gap-[7px]">
              <div className="flex flex-col gap-2 py-5 md:flex-row md:justify-between">
                <div className="font-['Inter'] text-lg font-bold text-black md:text-2xl">
                  {jobPost.title}
                </div>
                <div className="font-['Inter'] text-lg font-normal text-black md:text-2xl">
                  Date: {jobPost.date}
                </div>
              </div>
            </div>

            <div className=" h-auto font-['Roboto'] text-base font-normal leading-tight text-black sm:w-auto md:w-[863px] md:text-xl">
              <div className="flex flex-col gap-6">
                <div className="flex w-full flex-row items-start gap-16">
                  <div className="w-[25%] font-bold">Description:</div>
                  <div className="w-[75%] flex-grow">{jobPost.description}</div>
                </div>
                <div className="flex w-full flex-row items-start gap-16">
                  <div className="w-[25%] font-bold">Requirement:</div>
                  <div className="w-[75%] flex-grow">{jobPost.requirement}</div>
                </div>
                <div className="flex w-full flex-row items-start gap-16">
                  <div className="w-[25%] font-bold">Responsibility:</div>
                  <div className="w-[75%] flex-grow">
                    {jobPost.responsibility}
                  </div>
                </div>
                <div className="flex w-full flex-row items-start gap-16">
                  <div className="w-[25%] font-bold">Salary/Wage:</div>
                  <div className="w-[75%] flex-grow">{jobPost.salary} ETB</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end gap-5">
            <Link href={`/hr/job_vacancy/job_post/${jobPost._id}`}>Edit</Link>
            <button onClick={() => handleDeleteJobPost(jobPost._id)}>
              <div className="flex">
                <Image src={delet} width={24} height={24} alt="image" />
                Delete
              </div>
            </button>
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

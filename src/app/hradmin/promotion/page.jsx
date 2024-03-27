"use client";
import React, { useEffect, useState } from "react";
import Image from "../../../../node_modules/next/image";
import Link from "../../../../node_modules/next/link";
import { filter, plus } from "../../../../public/icons/index";
import Displaycard from "@/components/Card";
import Button from "@/components/Button";
import { RiEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { deletePromo, fetchPromoData } from "@/slices/promo";
import { useDispatch, useSelector } from "react-redux";
import DeleteConfirmationModal from "@/components/deleteconfirm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ActivityIndicator } from "@/components/Activity_indicator";

const page = () => {
  const buttonStyle = {
    width: "200px",
    height: "60px"
  };
  const buttonStyle2 = {
    width: "100px",
    height: "40px"
  };

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [promoId, setSelectedPromoId] = useState(null);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.promo);

  useEffect(() => {
    dispatch(fetchPromoData());
  }, [dispatch]);

  if (loading) {
    // console.log(loading);
    return <ActivityIndicator />;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  // if (data) {
  //   console.log(data)
  // }

  const handlePromoDelete = promoId => {
    setSelectedPromoId(promoId);
    setShowConfirmationModal(true);
  };

  const confirmDeletePromoPost = async () => {
    try {
      dispatch(deletePromo(promoId));
      toast.success("promotion post deleted successfully");
      setShowConfirmationModal(false);
      setTimeout(() => {
        window.location.reload();
      }, 3500);
    } catch (error) {
      console.error("Error deleting promotion post:", error);
      toast.error("Failed to delete promotion post");
      setShowConfirmationModal(false);
    }
  };

  const cancelDeletePromoPost = () => {
    setShowConfirmationModal(false);
  };

  return (
    <div className="lg:ml-12">
      {data && (
        <>
          <div className="mb-20 mr-[50px] mt-6 hidden flex-row justify-end gap-2 md:flex">
            <Button variant="filter" size="small" style={buttonStyle}>
              <div className=" flex  items-center justify-center gap-[39px] px-[25px]">
                <div className="h-6 w-6">
                  <Image src={filter} alt="filter" />
                </div>
                <p className="font-['Roboto'] text-base font-normal text-black text-opacity-25">
                  Filter
                </p>
              </div>
            </Button>
            <Link href="/hradmin/promotion/addpromotion">
              <Button
                color="bt_primary"
                style={{ width: "300px", height: "60px" }}>
                <div className=" flex  items-center justify-center gap-[39px] px-[15px]">
                  <div className="h-6 w-6">
                    {" "}
                    <Image src={plus} alt="plus" />
                  </div>
                  <div className="font-['Roboto'] text-xl font-normal text-white">
                    Add Poromotion
                  </div>
                </div>
              </Button>
            </Link>
          </div>
          <div className="mr-[25px] mt-6 flex justify-end gap-2 pl-4 md:hidden">
            <Button size="small" variant="filter" style={buttonStyle2}>
              <Image src={filter} alt="filter" />
            </Button>
            <Button size="small" style={buttonStyle2}>
              <Image src={plus} alt="plus" />
            </Button>
          </div>
          <div className="flex flex-col gap-[30px]">
            {data.map(promo => (
              <Displaycard variant="card1" margin="10px" key={promo._id}>
                <div className="flex min-w-[1000px] flex-col p-5 px-[20px] md:px-[50px]">
                  <div className="flex flex-col pb-[50px]">
                    <div className="flex flex-col items-center justify-between p-5 md:flex-row ">
                      <div className="font-primary text-base font-bold text-black md:text-heading_1">
                        {promo.title}
                      </div>
                      <div className="font-primary text-base font-normal text-black md:text-heading_2">
                        {/* Date: {moment(promo.data).format("MMMM Do, YYYY")} */}
                      </div>
                    </div>

                    <div className="flex flex-shrink-0 flex-row flex-wrap gap-2">
                      {promo.images.map(image => (
                        <img
                          src={`${image.url}`}
                          width={132}
                          height={155}
                          alt="image"
                          key={image.id}
                        />
                      ))}
                    </div>
                  </div>

                  <div className=" h-auto w-full font-['Roboto'] text-base font-normal leading-tight text-black sm:w-auto md:text-heading_2">
                    {promo.description}
                  </div>
                </div>
                <div className="mb-[5px] flex flex-row justify-end gap-5 px-[20px] md:mb-[10px] md:px-[50px]">
                  <Link
                    href={`/hradmin/promotion/addpromotion/${promo._id}`}
                    className="flex min-w-[100px] cursor-pointer gap-[5px]">
                    <button>
                      <RiEditFill size={24} className="text-bt_additional" />
                    </button>
                    <p className="font-primary text-base font-normal text-black text-opacity-25">
                      Edit
                    </p>
                  </Link>
                  <button
                    onClick={() => handlePromoDelete(promo._id)}
                    className="flex min-w-[100px] gap-[5px]">
                    <MdDelete size={24} className="rounded text-bt_tertiary" />
                    <p className="font-primary text-base font-normal text-black text-opacity-25">
                      Delete
                    </p>
                  </button>
                </div>
              </Displaycard>
            ))}
          </div>
          <DeleteConfirmationModal
            show={showConfirmationModal}
            onClose={cancelDeletePromoPost}
            onConfirm={confirmDeletePromoPost}
          />
        </>
      )}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        className="absolute  right-0 top-0 mt-20 w-[40px]  max-w-sm p-4"
      />
    </div>
  );
};

export default page;

import React from "react";
import Button from "./Button";

const DeleteConfirmationModal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black bg-opacity-50  ">
      <div className="rounded-md bg-white px-16 py-14 text-center">
        <p className="mb-4 text-xl font-bold">
          Are you sure you want to delete this item?
        </p>
        <div className="ml-48 mt-10 flex h-[40px] w-[100px] flex-row items-center gap-[30px]">
          <Button variant="success" size="large" onClick={onConfirm}>
            Confirm
          </Button>
          <Button variant="error" size="large" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;

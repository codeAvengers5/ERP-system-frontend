import React from "react";

const DeleteConfirmationModal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-30 flex h-full  w-full items-center justify-center bg-black bg-opacity-50">
      <div className="rounded bg-white p-4 shadow-md">
        <p>Are you sure you want to delete this item?</p>
        <div className="mt-4 flex justify-end">
          <button className="mr-2 px-4 py-2 text-meke-200" onClick={onConfirm}>
            Confirm
          </button>
          <button className="px-4 py-2" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;

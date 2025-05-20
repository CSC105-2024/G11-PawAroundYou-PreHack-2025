import React from "react";

function DeletePopup({ trigger, onCancel, onConfirm }) {
  if (!trigger) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-80 text-center shadow-lg">
        <div className="text-3xl mb-2">🗑️</div>
        <h2 className="text-lg font-bold text-[#89ACCE] mb-2">
          Confirm Delete?
        </h2>
        <p className="text-sm text-black font-medium mb-4">
          Are you sure you want to delete this item?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-1 border rounded text-[#89ACCE] border-[#89ACCE] hover:bg-[#f0f8ff] transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-1 bg-[#89ACCE] text-white rounded hover:bg-[#76a3c3] transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletePopup;

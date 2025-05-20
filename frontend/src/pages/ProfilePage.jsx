import React, { useState, useEffect } from "react";
import Navbar from "../assets/Navbar.jsx";
import DeletePopup from "../popup/DeletePopup";
import EditPopup from "../popup/EditPopup";
import EditIcon from "/Edit.png";
import EditHoverIcon from "/EditHov.png";
import DeleteIcon from "/Delete.png";
import DeleteHoverIcon from "/DeleteHov.png";
import { getAllRequestFromUser } from "../api/getRequestFromUser.js";

function ProfilePage() {
  useEffect(() => {
    const getRequestUser = async () => {
      const data = await getAllRequestFromUser();
      setItems(() => data.data);
    };
    getRequestUser();
  });
  const [items, setItems] = useState([]);

  const [editHoverIndex, setEditHoverIndex] = useState(null);
  const [deleteHoverIndex, setDeleteHoverIndex] = useState(null);

  const [showConfirm, setShowConfirm] = useState(false);
  const [indexToDelete, setIndexToDelete] = useState(null);

  const [showEdit, setShowEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleConfirmDelete = () => {
    setItems((prev) => prev.filter((_, i) => i !== indexToDelete));
    setShowConfirm(false);
  };

  const handleSaveEdit = (updatedItem) => {
    setItems((prev) =>
      prev.map((item, i) => (i === updatedItem.index ? updatedItem : item))
    );
    setShowEdit(false);
  };
  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FFECE2] p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl font-bold mb-2">My post</h1>
        <p className="text-[#f57c7c] mb-6">
          Your post will be automatically deleted within 10 days.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {paginatedItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 border border-[#89ACCE]"
            >
              <span
                className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full ${
                  item.status === "Complete"
                    ? "bg-green-200 text-green-700"
                    : "bg-red-200 text-red-700"
                }`}
              >
                {item.status}
              </span>
              <h2 className="font-semibold mb-1 text-base md:text-lg">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>

              <div className="flex gap-3 mt-auto">
                <button
                  onClick={() => {
                    setSelectedItem({ ...item, index });
                    setShowEdit(true);
                  }}
                  onMouseEnter={() => setEditHoverIndex(index)}
                  onMouseLeave={() => setEditHoverIndex(null)}
                  className="transition"
                >
                  <img
                    src={editHoverIndex === index ? EditHoverIcon : EditIcon}
                    className="w-6 h-6"
                    alt="Edit Icon"
                  />
                </button>

                <button
                  onClick={() => {
                    setIndexToDelete(index);
                    setShowConfirm(true);
                  }}
                  onMouseEnter={() => setDeleteHoverIndex(index)}
                  onMouseLeave={() => setDeleteHoverIndex(null)}
                  className="transition"
                >
                  <img
                    src={
                      deleteHoverIndex === index ? DeleteHoverIcon : DeleteIcon
                    }
                    className="w-6 h-6"
                    alt="Delete Icon"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-auto pt-6 space-x-2">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-black bg-white border border-gray-300"
            }`}
          >
            {"<"}
          </button>

          <span className="px-4 py-2 border rounded bg-[#89ACCE] text-white">
            {currentPage}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-black bg-white border border-gray-300"
            }`}
          >
            {">"}
          </button>
        </div>
        <DeletePopup
          trigger={showConfirm}
          onCancel={() => setShowConfirm(false)}
          onConfirm={handleConfirmDelete}
        />

        <EditPopup
          trigger={showEdit}
          item={selectedItem}
          onCancel={() => setShowEdit(false)}
          onSave={handleSaveEdit}
        />
      </div>
    </>
  );
}

export default ProfilePage;

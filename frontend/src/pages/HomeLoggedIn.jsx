import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./../assets/Navbar";
import CreateHelpPopup from "../popup/CreateHelpPopup.jsx";
import { getAllRequest } from "../api/getAllRequest.js";
import PostDetailPopup from "../popup/PostDetails.jsx";

const CommunityBoard = () => {

  const [data,setData] = useState([]);
  useEffect(() => {
      const getData = async () => {
        const data = await getAllRequest();
        setData(() => data.data);
      };
      getData();
    });

  const itemsPerPage = 9;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FFECE2] py-6 px-4 flex justify-center">
        <div className="w-full max-w-screen-xl bg-[#FFD3A0] rounded-lg p-6 sm:p-10 flex flex-col min-h-[80vh]">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h1 className="text-2xl sm:text-4xl font-semibold text-[#89ACCE]">
              Community board
            </h1>
            <button
              className="bg-[#89ACCE] hover:bg-[#89b4e3] text-white text-lg sm:text-xl py-2 px-4 rounded self-end sm:self-auto"
              onClick={() => setButtonPopup(true)}
            >
              + Create
            </button>
            <CreateHelpPopup
              trigger={buttonPopup}
              setTrigger={setButtonPopup}
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:min-h-[180px] min-h-[500px]">
            {paginatedData.map((card) => (
                <div
                    key={card.id}
                    onClick={() => setSelectedPost(card)}
                    className="cursor-pointer bg-white rounded-lg shadow px-4 py-6 sm:px-6 sm:py-8 relative w-full h-auto min-h-[180px] hover:shadow-lg transition"
                >
                <span className="absolute top-4 right-4 bg-red-100 text-red-500 text-xs font-semibold px-2 py-1 rounded">
                  {card.status}
                </span>
                <h2 className="font-bold text-base sm:text-lg mt-4 mb-2 break-words">
                  {card.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed break-words">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
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
        </div>
      </div>
      <CreateHelpPopup trigger={buttonPopup} setTrigger={setButtonPopup} />
      <PostDetailPopup
          trigger={selectedPost !== null}
          setTrigger={() => setSelectedPost(null)}
          post={selectedPost}
      />

    </>
  );
};

export default CommunityBoard;

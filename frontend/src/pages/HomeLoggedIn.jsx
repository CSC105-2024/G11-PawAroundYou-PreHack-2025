import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./../assets/Navbar";

const CommunityBoard = () => {
  const [itemsPerPage, setItemsPerPage] = useState(9); 
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerPage(8); 
      } else {
        setItemsPerPage(9); 
      }
    };

    updateItemsPerPage(); 
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);
  const [mockData] = useState([
    {
      id: 1,
      title: "How to repair pipes",
      description: "My pipe broke at a curved corner",
      status: "Incomplete",
    },
    {
      id: 2,
      title: "Fix leaking faucet",
      description: "It drips all night. How to stop?",
      status: "Incomplete",
    },
    {
      id: 3,
      title: "Water pump problem",
      description: "It turns off randomly during the day",
      status: "Incomplete",
    },
    {
      id: 4,
      title: "Bathroom clogged",
      description: "Water won’t drain at all!",
      status: "Incomplete",
    },
    {
      id: 5,
      title: "Sink leakage",
      description: "Leaking under the cabinet",
      status: "Incomplete",
    },
    {
      id: 6,
      title: "PVC joint cracked",
      description: "Need glue recommendation",
      status: "Incomplete",
    },
    {
      id: 7,
      title: "Pipe rusting",
      description: "How to prevent future damage?",
      status: "Incomplete",
    },
    {
      id: 8,
      title: "Outdoor pipe burst",
      description: "Happened after last rain",
      status: "Incomplete",
    },
    {
      id: 9,
      title: "Basement flood",
      description: "Need urgent fix!",
      status: "Incomplete",
    },
    {
      id: 10,
      title: "Low water pressure",
      description: "From upstairs bathroom",
      status: "Incomplete",
    },
    {
      id: 11,
      title: "Shower not working",
      description: "No water comes out",
      status: "Incomplete",
    },
  ]);

  const totalPages = Math.ceil(mockData.length / itemsPerPage);

  const paginatedData = mockData.slice(
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
          <div className="flex sm:flex-row justify-between items-start sm:items-center mb-6">
            <h1 className="flex items-center text-2xl sm:text-4xl font-semibold text-[#89ACCE]">
              Community board
            </h1>
            <Link
              to="/create-post"
              className="bg-[#89ACCE] hover:bg-[#89b4e3] text-white text-lg sm:text-xl py-2 px-4 rounded self-end sm:self-auto"
            >
              + Create
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:min-h-[180px] md:min-h-[180px]">
            {paginatedData.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-lg shadow px-4 py-6 sm:px-6 sm:py-8 relative w-full h-auto sm:min-h-[180px]"
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
        </div>
      </div>
    </>
  );
};

export default CommunityBoard;

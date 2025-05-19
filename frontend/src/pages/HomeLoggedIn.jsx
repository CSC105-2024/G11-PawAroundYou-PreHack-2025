import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./../assets/Navbar";

const CommunityBoard = () => {
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

  const itemsPerPage = 9;
  const totalPages = Math.ceil(mockData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

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
      <div className="min-h-screen bg-[#FFECE2] p-10 flex justify-center">
        <div className="w-11/12 bg-[#FFD3A0] p-12">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-semibold text-[#89ACCE]">
              Community board
            </h1>
            <Link
              to="/create-post"
              className="bg-[#89ACCE] hover:bg-[#89b4e3] text-white text-xl font-semibold py-2 px-4 rounded"
            >
              + Create
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {paginatedData.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-lg shadow p-8 relative w-full h-[250px]"
              >
                <span className="absolute top-6 right-6 bg-red-100 text-red-500 text-xs font-semibold px-2 py-1 rounded">
                  {card.status}
                </span>
                <h2 className="font-bold text-sm mb-2">{card.title}</h2>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 space-x-2">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded border ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-white text-[#E97A28] border-[#E97A28]"
              }`}
            >
              {"<"}
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 border rounded ${
                  currentPage === i + 1
                    ? "bg-[#E97A28] text-white"
                    : "bg-white text-[#E97A28] border-[#E97A28]"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded border ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-white text-[#E97A28] border-[#E97A28]"
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

import React from "react";
import Navbar from "../assets/Navbar.jsx";


function ProfilePage() {
    return (
        <div className="min-h-screen bg-[#FFECE2] p-8">
            <Navbar />
            <h1 className="text-2xl font-bold mb-2">My post</h1>
            <p className="text-[#f57c7c] mb-6">Your post will be automatically deleted within 10 days.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[...Array(9)].map((_, index) => (
                    <div
                        key={index}
                        className={`relative bg-white rounded-lg shadow-sm p-4 border ${
                            index === 3 ? 'border-blue-500 border-dashed' : ''
                        }`}
                    >
                        {/* Status */}
                        <span className="absolute top-2 right-2 bg-red-200 text-red-700 text-xs px-2 py-1 rounded-full">
                            Complete
                        </span>

                        {/* Title */}
                        <h2 className="font-semibold mb-1">How to repair pipes</h2>
                        <p className="text-sm text-gray-600 mb-3">My pipe broke at a curved corner</p>

                        {/* Action Buttons */}
                        <div className="flex gap-2 mt-auto">
                            <button className="text-blue-500 hover:text-blue-700">
                                <img src="/Edit.png" className="w-6 h-6" alt="Edit Icon" />
                            </button>
                            <button className="text-blue-500 hover:text-blue-700 text-xl">
                                🗑️
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProfilePage;
import React from "react";

export default function PostDetailPopup({ trigger, setTrigger, post }) {
    if (!trigger || !post) return null;

    return (
        <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-4xl p-8 relative">

                <button
                    className="absolute top-4 right-6 text-xl font-bold"
                    onClick={() => setTrigger(false)}
                >
                    &times;
                </button>

                <div className="absolute top-4 right-20">
          <span className="bg-red-400 text-white font-medium px-4 py-1 rounded-md">
            Incomplete
          </span>
                </div>

                <h2 className="text-2xl font-bold mb-8">{post.name}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <div className="mb-6">
                            <h3 className="font-semibold">Title</h3>
                            <p className="text-[#89ACCE] rounded-md mt-1">{post.title}</p>
                        </div>
                        <div className="mb-6">
                            <h3 className="font-semibold">Description</h3>
                            <p className="text-[#89ACCE] rounded-md mt-1">{post.description}</p>
                        </div>
                    </div>

                    <div>
                        <div className="mb-6">
                            <h3 className="font-semibold">Contact</h3>
                            <p className="text-[#89ACCE] rounded-md mt-1">{post.contact}</p>
                        </div>
                        <div className="mb-6">
                            <h3 className="font-semibold">Location</h3>
                            <p className="text-[#89ACCE] rounded-md mt-1">{post.location}</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => setTrigger(false)}
                        className="bg-[#89ACCE] text-white px-6 py-2 rounded-md hover:bg-[#7295b8]"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
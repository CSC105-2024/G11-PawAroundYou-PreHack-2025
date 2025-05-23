import React, { useEffect, useState } from "react";
import { getUser } from "./../api/getUser";

export default function PostDetailPopup({ trigger, setTrigger, post }) {
  if (!trigger || !post) return null;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const data = await getUser(post.userId);
      setUser(() => data.data);
    };
    getUserData();
  });

  return (
    <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center z-50 bg-black/40">
      <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-4xl p-8 relative">
        <button
          className="absolute top-4 right-6 text-xl font-bold"
          onClick={() => setTrigger(false)}
        >
          &times;
        </button>

        <div className="flex justify-between">
          <h1 className="font-bold text-4xl">
            {user?.fName} {user?.sName}
          </h1>
          <div className="flex items-center mr-4">
            <span
              className={` font-medium px-4 py-1 rounded-md ${
                post.status?.toLowerCase() === "complete"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {post.status}
            </span>
          </div>
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
              <p className="text-[#89ACCE] rounded-md mt-1">
                {post.description}
              </p>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h3 className="font-semibold">Contact</h3>
              <p className="text-[#89ACCE] rounded-md mt-1">{user?.tel}</p>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold">Location</h3>
              <p className="text-[#89ACCE] rounded-md mt-1">
                {post.locationDistrict}, {post.locationProvince}
              </p>
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

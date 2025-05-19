import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#FFECE2] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 space-y-6">
        {/* Logo */}
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2 text-[#89ACCE] text-2xl font-bold">
            <span>
              <img src="./public/Build.png" alt="Logo" className="w-10 h-14" />
            </span>
            <span>Ma Help Kan</span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-between rounded-md overflow-hidden">
          <Link
            to="/signup"
            className="w-1/2 text-center py-2 font-semibold text-black"
          >
            Sign Up
          </Link>
          <button className="w-1/2 bg-[#89ACCE] text-white py-2 font-semibold">
            Sign In
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="mahelpkan@gmail.com"
              className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#89ACCE] text-[#89ACCE]"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Password</label>
            <input
              type="password"
              placeholder="***********"
              className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#89ACCE] text-[#89ACCE]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#89ACCE] text-white font-semibold py-3 rounded-md shadow hover:bg-[#6e95bb] transition"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

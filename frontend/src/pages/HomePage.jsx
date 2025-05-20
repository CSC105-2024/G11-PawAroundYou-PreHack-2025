import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./../assets/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FFECE2] text-[#89ACCE] font-['Poppins']">
        <main className="px-6 py-16 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 leading-snug">
            Start your journey of support
            <br className="hidden md:block" /> and care
          </h1>

          {/* Desktop: รูปบน - ปุ่มอยู่ด้านล่าง | Mobile: ปุ่มล่างสุด */}
          <img
            src="./public/Teamwork.png"
            alt="Teamwork"
            className="rounded-xl w-full mb-5 shadow"
          />

          {/* ปุ่ม Join the Community (เฉพาะ Desktop อยู่ตรงนี้) */}
          <div className="hidden md:block text-center mb-10">
            <Link
              to="/signup"
              className="bg-[#89ACCE] text-white px-6 py-3 rounded-sm font-medium shadow-md hover:bg-[#6e95bb]"
            >
              Join the Community
            </Link>
          </div>

          {/* Section 1 */}
          <div className="flex flex-col md:flex-row gap-10 items-center mt-20 mb-20">
            <img
              src="./public/Hands together.png"
              alt="Hands together"
              className="rounded-xl w-full md:w-1/2 shadow"
            />
            <p className="text-lg md:w-1/2 leading-relaxed">
              We believe no one should face challenges alone. Our community is
              built on support, where people come together to offer help, share
              advice, and solve real-life problems — together.
            </p>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-20">
            <img
              src="./public/Teammeet.png"
              alt="Teammeet"
              className="rounded-xl w-full md:w-1/2 shadow"
            />
            <p className="text-lg md:w-1/2 leading-relaxed text-left">
              Here, people come together to ask for help, offer support, and
              share kindness. Whether you need a hand or want to lend one — this
              space is for you.
            </p>
          </div>

          <div className="md:hidden text-center mt-10">
            <Link
              to="/signup"
              className="bg-[#89ACCE] text-white px-6 py-3 rounded-sm font-semibold shadow-md hover:bg-[#6e95bb]"
            >
              Join the Community
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

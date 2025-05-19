import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("Navbar component mounted");
  }, []);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("User logged out");
  };

  return (
    <header className="flex justify-between items-center px-8 py-6 bg-[#FFECE2] text-[#89ACCE]">
      <div className="text-2xl font-semibold flex items-center gap-2">
        <span>
          <img src="./public/WrenchLogo.png" alt="WrenchLogo" className="w-8 h-8" />
        </span>
        Ma Help Kan
      </div>

        {isLoggedIn ? (
        <>
          <nav className="flex gap-12 text-xl font-medium">
            <a href="/home" className="hover:underline">
              Home
            </a>
            <a href="/profile" className="hover:underline">
              Profile
            </a>
          </nav>
          <button
            onClick={handleLogout}
            className="bg-[#89ACCE] text-white px-4 text-xl py-2 rounded-md hover:bg-[#7295b8] transition"
          >
            <Link to="/">Logout</Link>
          </button>
        </>
      ) : (
        <button
          onClick={handleLogout}
          className="bg-[#89ACCE] text-white text-xl font-medium px-4 py-2 rounded-md hover:bg-[#7295b8] transition"
        >
          <Link to="/signup">Sign Up</Link>
        </button>
      )}
    </header>
  );
}

export default Navbar;

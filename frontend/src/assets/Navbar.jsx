import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    console.log("User logged out");
  };

  return (
    <header className="bg-[#FFECE2] text-[#89ACCE] px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
        <img
          src="./public/WrenchLogo.png"
          alt="WrenchLogo"
          className="w-6 h-6 sm:w-8 sm:h-8"
        />
        Ma Help Kan
      </div>

      {/* Desktop Menu */}
      {isLoggedIn && (
        <nav className="hidden md:flex gap-8 text-lg font-medium">
          <Link to="/home" className="hover:underline">
            Home
          </Link>
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
        </nav>
      )}

      <div className="flex">
        {/* Mobile Hamburger */}
        {isLoggedIn && (
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl focus:outline-none mr-4"
            >
              ☰
            </button>
          </div>
        )}

        {/* Logout / Sign Up Button */}
        <div>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-[#89ACCE] text-white px-4 text-sm sm:text-base py-2 rounded-md hover:bg-[#7295b8] transition"
            >
              <Link to="/">Logout</Link>
            </button>
          ) : (
            <button className="bg-[#89ACCE] text-white text-sm sm:text-base font-medium px-4 py-2 rounded-md hover:bg-[#7295b8] transition">
              <Link to="/signup">Sign Up</Link>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && isLoggedIn && (
        <div className="absolute top-16 left-4 right-4 bg-white shadow-md rounded-md flex flex-col items-start p-4 md:hidden z-50">
          <Link
            to="/home"
            onClick={() => setMenuOpen(false)}
            className="py-2 text-[#89ACCE] w-full hover:underline"
          >
            Home
          </Link>
          <Link
            to="/profile"
            onClick={() => setMenuOpen(false)}
            className="py-2 text-[#89ACCE] w-full hover:underline"
          >
            Profile
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;

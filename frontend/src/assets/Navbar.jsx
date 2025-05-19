import React, { useState, useEffect } from "react";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("Navbar component mounted");
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("User logged out");
  };

  return (
    <header className="flex justify-between items-center px-8 py-6 bg-[#FFECE2] text-[#89ACCE]">
      <div className="text-2xl font-semibold flex items-center gap-2">
        <span role="img" aria-label="wrench">
          🔧
        </span>
        Ma Help Kan
      </div>

      {!isLoggedIn ? (
        <>
          <nav className="flex gap-12 text-xl font-medium">
            <a href="/" className="hover:underline">
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
            Logout
          </button>
        </>
      ) : (
        <button
          onClick={handleLogout}
          className="bg-[#89ACCE] text-white text-xl px-4 py-2 rounded-md hover:bg-[#7295b8] transition"
        >
          Sign Up
        </button>
      )}
    </header>
  );
}

export default Navbar;

import React, { useState, useEffect } from "react";

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        console.log("Navbar component mounted");
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        console.log("User logged out");
    };

    return (
        <header className="flex justify-between items-center px-6 py-4 bg-[#FFECE2] text-[#89ACCE] ">
            <div className="text-lg font-semibold flex items-center gap-2">
                <img src="/Build.png" className="w-10 h-10" alt="Build Icon" />
                Ma Help Kan
            </div>

            <nav className="flex gap-12 text-base font-medium">
                <a href="#" className="hover:underline">Home</a>
                <a href="#" className="hover:underline">Profile</a>
            </nav>

            {isLoggedIn && (
                <button
                    onClick={handleLogout}
                    className="bg-[#89ACCE] text-white px-4 py-2 rounded-md hover:bg-[#7295b8] transition"
                >
                    Logout
                </button>
            )}
        </header>
    );
}

export default Navbar;
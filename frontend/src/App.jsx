import React, { useRef } from 'react';
import { Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";

function App() {
    return (
        <>
            <h1>Welcome to the Home Page!</h1>
            <Outlet /> {/* Render nested routes here */}
        </>
    );
}

export default App;

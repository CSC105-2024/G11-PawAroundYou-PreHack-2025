import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import HomePage from "./pages/HomePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

const router = createBrowserRouter([
    {
        path: "/", // Home route
        element: <App />, // Render the App component
    },
    {
        path: "/home", // Home route
        element: <HomePage />, // Render the App component
    },
    {
        path: "/profile",
        element: <ProfilePage />, // Render the App component
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)

// Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 px-6 py-4">
      <div className="flex justify-end space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="px-4 py-2 text-white border border-white rounded-md hover:bg-gray-700 transition duration-300"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/create-account")}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
        >
          Create Account
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

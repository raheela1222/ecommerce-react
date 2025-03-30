import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation(); // Get the current location (path)

  // Function to check if the current link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="px-1 py-6">
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-200">
        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[45%] mb-8">
          {" "}
          45%
        </div>
      </div>
      <div className="">
        <div className="flex flex-col">
          {/* Link for "Basic info" */}
          <Link
            to="/" // Path to navigate to
            className={`w-full text-left font-medium text-base rounded-lg px-2 py-2 mb-4 ${
              isActive("/") ? "text-black bg-white" : "text-[#ccc] bg-transparent"
            }`}
          >
            1. Basic info
          </Link>

          {/* Link for "Basic text info" */}
          <Link
            to="/Tax" // Path to navigate to
            className={`w-full text-left font-medium text-base rounded-lg px-2 py-2 mb-4 ${
              isActive("/Tax") ? "text-black bg-white" : "text-[#ccc] bg-transparent"
            }`}
          >
            2. Basic text info
          </Link>

          {/* Link for "Hold" */}
          <Link
            to="/Hold" // Path to navigate to
            className={`w-full text-left font-medium text-base rounded-lg px-2 py-2 mb-4 ${
              isActive("/Hold") ? "text-black bg-white" : "text-[#ccc] bg-transparent"
            }`}
          >
            3. Hold
          </Link>

          {/* Link for "Setting up the close" */}
          <Link
            to="/setting" // Path to navigate to
            className={`w-full text-left font-medium text-base rounded-lg px-2 py-2 mb-4 ${
              isActive("/setting") ? "text-black bg-white" : "text-[#ccc] bg-transparent"
            }`}
          >
            4. Setting up the close
          </Link>

          {/* Link for "Contract" */}
          <Link
            to="/contract" // Path to navigate to
            className={`w-full text-left font-medium text-base rounded-lg px-2 py-2 mb-4 ${
              isActive("/contract") ? "text-black bg-white" : "text-[#ccc] bg-transparent"
            }`}
          >
            5. Contract
          </Link>

          {/* Link for "Review and sign document" */}
          <Link
            to="/review" // Path to navigate to
            className={`w-full text-left font-medium text-base rounded-lg px-2 py-2 mb-4 ${
              isActive("/review") ? "text-black bg-white" : "text-[#ccc] bg-transparent"
            }`}
          >
            6. Review and sign Document
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

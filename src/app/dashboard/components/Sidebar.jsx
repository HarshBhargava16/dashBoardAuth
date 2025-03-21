import React, { useState } from "react";
import { FiUser, FiSettings, FiHome, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-3 mt-12  bg-gray-700 text-white fixed top-4 left-4 z-50 rounded"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      
      <div
        className={`h-screen  bg-gray-700 text-gray-200 p-5 font-bold text-lg 
          fixed md:relative md:block transition-transform duration-300 ease-in-out 
          w-64 md:w-1/5 ${
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
      >
        <nav>
          <ul className="space-y-10">
            <li>
              <Link
                href="./profile"
                className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-600 cursor-pointer transition"
              >
                <FiUser size={20} />
                <div>Profile</div>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-600 cursor-pointer transition"
              >
                <FiHome size={20} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-600 cursor-pointer transition"
              >
                <FiSettings size={20} />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

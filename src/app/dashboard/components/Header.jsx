"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const tokenString = localStorage.getItem("token");

    if (tokenString) {
      try {
        const parsedToken = JSON.parse(tokenString);
        setUser(parsedToken.email); 
      } catch (error) {
        console.error("Error parsing token:", error);
        setUser(null);
      }
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    router.push("/login");
  }

  return (
    <header className="w-full bg-gray-800 p-4 flex justify-between items-center shadow-lg">
      
      <h1 className="text-white text-2xl font-bold">Dashboard</h1>

      
      
      
      <div className="hidden sm:flex items-center gap-4">
        {user ? (
          <>
            <span className="text-white font-medium">{user}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
            >
              Logout
            </button>
          </>
        ) : (
          <span className="text-gray-300">Loading...</span>
        )}
      </div>

      
      <div
        className={`absolute  top-45 left-0 w-full bg-gray-900 text-white shadow-md p-5 transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } sm:hidden`}
      >
        {user ? (
          <>
            <p className="text-center text-lg">{user}</p>
            <button
              onClick={handleLogout}
              className="w-full mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
            >
              Logout
            </button>
          </>
        ) : (
          <p className="text-center text-gray-300">Loading...</p>
        )}
      </div>
    </header>
  );
};

export default Header;

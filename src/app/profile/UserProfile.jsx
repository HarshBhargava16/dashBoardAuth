"use client";
import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";

const UserProfile = () => {
  const [userName, setUserName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const tokenString = localStorage.getItem("token");

    if (!tokenString) {
      router.push("/login");
      return;
    }

    try {
      const parsedToken = JSON.parse(tokenString);
      const email = parsedToken.email || "";
      const nameFromEmail = email.split("@")[0]; 
      setUserName(nameFromEmail);
    } catch (error) {
      console.error("Error parsing token:", error);
      router.push("/login");
    }
  }, []);

  return (
    <div className="mx-auto mt-10 max-w-2xl p-6 md:p-8 bg-white h-auto shadow-3xl rounded-2xl">
      <div className="overflow-auto">
        <h1 className="text-center text-2xl font-bold text-blue-700 mb-6">
          Profile Details
        </h1>

        <div className="w-full overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-left text-base md:text-lg">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="p-3 md:p-4 border border-gray-400">S.No</th>
                <th className="p-3 md:p-4 border border-gray-400">Attribute</th>
                <th className="p-3 md:p-4 border border-gray-400">Value</th>
                <th className="p-3 md:p-4 border border-gray-400 text-center">
                  Profile
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="hover:bg-gray-100 transition">
                <td className="p-3 md:p-6 border border-gray-400 font-semibold">
                  1.
                </td>
                <td className="p-3 md:p-6 border border-gray-400 font-semibold">
                  Full Name
                </td>
                <td className="p-3 md:p-6 border border-gray-400">
                  {userName}
                </td>
                <td rowSpan={3} className="p-6 text-center align-middle">
                  <div className="flex justify-center">
                    <FaUser size={80} className="text-gray-800" />
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 transition">
                <td className="p-3 md:p-6 border border-gray-400 font-semibold">
                  2.
                </td>
                <td className="p-3 md:p-6 border border-gray-400 font-semibold">
                  Gender
                </td>
                <td className="p-3 md:p-6 border border-gray-400">Male</td>
              </tr>
              <tr className="hover:bg-gray-100 transition">
                <td className="p-3 md:p-6 border border-gray-400 font-semibold">
                  3.
                </td>
                <td className="p-3 md:p-6 border border-gray-400 font-semibold">
                  Subject
                </td>
                <td className="p-3 md:p-6 border border-gray-400">PCM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

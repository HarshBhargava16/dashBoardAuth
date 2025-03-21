"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    const tokenString = localStorage.getItem("token");

    if (!tokenString) {
      router.push("/login");
      return;
    }

    try {
      const parsedToken = JSON.parse(tokenString);
      console.log(parsedToken.email);
    } catch (error) {
      console.error("Error parsing token:", error);
      router.push("/login");
    }
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default page;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const router = useRouter();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?!.*\s).{6,}$/;

  function submitForm(e) {
    e.preventDefault();

    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);

    setEmailError(!isEmailValid);
    setPasswordError(!isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      console.log("Welcome to Dashboard");
      setEmailError(false);
      setPasswordError(false);
      const mockToken = {
        email: email,
        token: "mock-jwt-token",
      };
      
      localStorage.setItem("token", JSON.stringify(mockToken));
      router.push("/dashboard");
      
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-900">
      <form
        onSubmit={submitForm}
        className="w-full mx-2 max-w-md bg-gray-700 shadow-lg rounded-lg p-6"
      >
        <h1 className="text-center font-bold text-3xl mb-6 text-gray-100">
          Login
        </h1>

        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-100">
            Enter your Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-gray-100 mt-1 p-2 border border-gray-500 rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Enter Your Email"
          />
          {emailError && (
            <div className="text-red-600 text-lg">
              Please enter a valid email address
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-100">
            Enter Your Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-gray-100 mt-1 p-2 border border-gray-500 rounded-md bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Enter Your Password"
          />
          {passwordError && (
            <div className="text-red-600 text-lg">
              Password must be at least 6 characters
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Page;

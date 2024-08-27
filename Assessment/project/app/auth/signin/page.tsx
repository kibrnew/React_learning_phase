// components/SignIn.tsx

import React from "react";
import Image from "next/image";

const SignIn: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/2 flex flex-col gap-16 bg-white p-6">
        <div>
          <Image
            src="/a2sv-icon-login.svg"
            alt="Toy Icon"
            width={100} // Adjust the width as per your design
            height={100} // Adjust the height as per your design
          />
        </div>
        <div className="flex items-center w-full justify-center ">
          <div className=" flex justify-center">
            {/* Importing the toy icon */}
            <Image
              src="/toy-icon.svg"
              alt="Toy Icon"
              width={350} // Adjust the width as per your design
              height={200} // Adjust the height as per your design
            />
          </div>
          <div className="w-1/3">
            <h2 className="text-5xl font-bold mb-2 text-gray-900">
              Welcome Back
            </h2>
            <p className="text-gray-600 mb-6">
              Login to receive blogs and learn more about APSV
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center bg-blue-600">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Login</h2>
          <p className="text-gray-600 mb-4">
            Hey, Enter your details to sign in to your account
          </p>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign in
              </button>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

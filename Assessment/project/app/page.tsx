import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">APS</div>
          <nav>
            <a href="#" className="px-4">
              Home
            </a>
            <a href="#" className="px-4">
              About
            </a>
            <a href="#" className="px-4">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-700">
          Welcome to A2SV Blog App
        </h1>
        <p className="text-lg mb-6 text-gray-700">
          Explore our comprehensive blog application built with Next.js and
          Redux Toolkit. Dive into a collection of insightful blogs and detailed
          views.
        </p>
        <div className="space-x-4">
          <a
            href="/signin"
            className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800"
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="bg-white text-blue-700 border border-blue-700 px-6 py-2 rounded-md hover:bg-blue-50"
          >
            Sign Up
          </a>
        </div>
      </main>

      <footer className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 text-center text-gray-600">
          &copy; 2024 APS. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

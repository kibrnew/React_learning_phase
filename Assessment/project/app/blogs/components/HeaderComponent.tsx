import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/a2sv-header-icon.svg"
            alt="APS Icon"
            width={150} // Adjust the width as per your design
            height={150} // Adjust the height as per your design
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Teams
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Success Stories
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            About Us
          </a>
          <a href="#" className="text-blue-600 border-b-2 border-blue-600">
            Blogs
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Get Involved
          </a>
        </nav>

        {/* Login and Donate Buttons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Login
          </a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Donate
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

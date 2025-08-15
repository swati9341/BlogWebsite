
import React, { useState } from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutubeSquare } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <IoLogoInstagram className="text-2xl md:text-3xl" />
          <span className="font-bold text-lg md:text-xl">Brand</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          <li className="hover:text-gray-200 transition cursor-pointer">Home</li>
          <li className="hover:text-gray-200 transition cursor-pointer">About Us</li>
          <li className="hover:text-gray-200 transition cursor-pointer">Contact</li>
        </ul>

        {/* Subscribe Button */}
        <button className="hidden md:flex items-center gap-2 bg-white text-red-500 px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
          Subscribe <FaYoutubeSquare className="text-xl" />
        </button>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-red-600 px-4 py-4 flex flex-col gap-4 text-white">
          <li className="cursor-pointer hover:text-gray-200">Home</li>
          <li className="cursor-pointer hover:text-gray-200">About Us</li>
          <li className="cursor-pointer hover:text-gray-200">Contact</li>
          <button className="flex items-center gap-2 bg-white text-red-500 px-4 py-2 rounded-full hover:scale-105 transition mt-2">
            Subscribe <FaYoutubeSquare className="text-xl" />
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;

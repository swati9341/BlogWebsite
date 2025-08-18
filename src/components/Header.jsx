import React, { useState } from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutubeSquare } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "About Us", "Contact"];

  return (
    <header className="bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <IoLogoInstagram className="text-2xl md:text-3xl" />
          <span className="font-bold text-lg md:text-xl">Brand</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-lg font-medium">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="list-none hover:text-gray-200 transition cursor-pointer"
            >
              {item}
            </li>
          ))}
        </nav>

        {/* Subscribe Button */}
        <button className="hidden md:flex items-center gap-2 bg-white text-red-500 px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
          Subscribe <FaYoutubeSquare className="text-xl" />
        </button>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-red-600 px-4 py-4 flex flex-col gap-4 text-white animate-slide-down">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="list-none cursor-pointer hover:text-gray-200"
            >
              {item}
            </li>
          ))}
          <button className="flex items-center gap-2 bg-white text-red-500 px-4 py-2 rounded-full hover:scale-105 transition mt-2">
            Subscribe <FaYoutubeSquare className="text-xl" />
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;


import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutubeSquare, FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-500 to-rose-500 text-white pt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-lg font-bold mb-4">About</h2>
          <p className="text-sm text-white/90">
            Modern responsive website built with Tailwind CSS & React. Follow us for updates.
          </p>
          <div className="flex gap-4 mt-4 text-xl">
            <IoLogoInstagram className="hover:text-gray-200 cursor-pointer transition" />
            <FaYoutubeSquare className="hover:text-gray-200 cursor-pointer transition" />
            <FaFacebookF className="hover:text-gray-200 cursor-pointer transition" />
            <FaTwitter className="hover:text-gray-200 cursor-pointer transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Contact</li>
            <li className="hover:underline cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h2 className="text-lg font-bold mb-4">Subscribe</h2>
          <p className="text-sm mb-2">Get updates directly to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded text-black flex-1 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-red-500 px-4 py-2 rounded-full hover:scale-105 transition font-semibold">
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact</h2>
          <p className="text-sm">123 Main Street</p>
          <p className="text-sm">City, State, 12345</p>
          <p className="text-sm">Email: info@example.com</p>
          <p className="text-sm">Phone: +1 234 567 890</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-white/20 pt-4 text-center text-sm text-white/80">
        © {new Date().getFullYear()} Your Brand. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

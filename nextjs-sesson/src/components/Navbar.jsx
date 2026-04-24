"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-black">
          MyLogo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/profile" className="hover:text-blue-600">
            Profile
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
        </div>

        

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">


          <Link
            href="/api/auth/signin"
            className="px-4 py-2 hover:text-blue-700 transition"
          >
            Sign in
          </Link>
          
          <Link
            href="/api/auth/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>

         

          

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>


      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4">
          <div className="flex flex-col space-y-3 text-gray-700 font-medium">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/profile" onClick={() => setIsOpen(false)}>
              Profile
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link href="/products" className="hover:text-blue-600">
              Products
            </Link>
          </div>

          <div className="flex flex-col space-y-3 pt-2">
            <Link
              href="/api/auth/signin"
              className="w-full px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-center text-black"
            >
              Sign In
            </Link>
            <Link
              href="/api/auth/signup"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center"
            >
              Sign Up
            </Link>

            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

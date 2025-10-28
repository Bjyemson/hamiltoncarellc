"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "react-feather";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-indigo-700">
          Hamilton Care
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link href="/" className="text-gray-700 hover:text-indigo-700 transition">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-indigo-700 transition">
            About
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-indigo-700 transition">
            Services
          </Link>
          <Link href="/career" className="text-gray-700 hover:text-indigo-700 transition">
            Career
          </Link>
          <Link
            href="/contact"
            className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col px-6 py-4 space-y-3 font-medium">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-indigo-700 transition">
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-indigo-700 transition">
              About
            </Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-indigo-700 transition">
              Services
            </Link>
            <Link href="/career" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-indigo-700 transition">
              Career
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-full text-center hover:bg-indigo-700 transition"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

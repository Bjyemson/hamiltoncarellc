import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-indigo-900 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-700 flex items-center justify-center">
            <Image
              src="/logozi.png"
              alt="Hamilton Care Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <span className="font-bold text-lg md:text-xl tracking-tight">
            Hamilton Care
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className="hover:text-indigo-500 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-indigo-500 transition">
            About
          </Link>
          <Link href="/services" className="hover:text-indigo-500 transition">
            Services
          </Link>

          <Link href="/core-values" className="hover:text-indigo-500 transition">
            Core Values
          </Link>
          <Link href="/apply" className="hover:text-indigo-500 transition">
            Apply
          </Link>
          <Link href="/contact" className="hover:text-indigo-500 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-indigo-900 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg md:hidden z-50 flex flex-col items-start px-8 py-16 space-y-8 text-lg font-medium"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-indigo-900"
              aria-label="Close Menu"
            >
              <X size={28} />
            </button>

            <Link
              href="/"
              className="hover:text-indigo-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-indigo-600 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/core-values"
              className="hover:text-indigo-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Core Values
            </Link>
            <Link
              href="/apply"
              className="hover:text-indigo-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Apply
            </Link>
            <Link
              href="/contact"
              className="hover:text-indigo-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

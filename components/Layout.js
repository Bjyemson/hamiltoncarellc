// components/Layout.js
import Link from "next/link";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
}

function Header({ menuOpen, setMenuOpen }) {
  // local state fallback if parent didn't pass
  const [open, setOpen] = useState(menuOpen ?? false);

  // keep both in sync if toggle clicked
  const toggle = () => {
    setOpen((s) => !s);
    setMenuOpen && setMenuOpen((s) => !s);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + brand (wrap image + text inside a single element) */}
        <Link href="/" legacyBehavior>
          <a className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Hamilton Care Logo"
              className="w-10 h-10 object-contain rounded-full"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-indigo-700 text-lg">
                Hamilton Care LLC
              </span>
              <small className="text-xs text-indigo-500">Compassionate care</small>
            </div>
          </a>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/" legacyBehavior><a className="hover:text-indigo-600 transition">Home</a></Link>
          <Link href="/about" legacyBehavior><a className="hover:text-indigo-600 transition">About</a></Link>
          <Link href="/services" legacyBehavior><a className="hover:text-indigo-600 transition">Services</a></Link>
          <Link href="/core-values" legacyBehavior><a className="hover:text-indigo-600 transition">Core Values</a></Link>
          <Link href="/contact" legacyBehavior><a className="hover:text-indigo-600 transition">Contact</a></Link>
        </nav>

        {/* CTA - Career (desktop) */}
        <div className="hidden md:block">
          <Link href="/career" legacyBehavior>
            <a className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700 transition">
              Career
            </a>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-indigo-700"
          onClick={toggle}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      { (menuOpen ?? open) && (
        <div className="md:hidden fixed inset-0 z-40 bg-indigo-950/95 flex flex-col items-center justify-center gap-6 text-white text-xl">
          <Link href="/" legacyBehavior><a onClick={toggle} className="hover:text-indigo-300">Home</a></Link>
          <Link href="/about" legacyBehavior><a onClick={toggle} className="hover:text-indigo-300">About</a></Link>
          <Link href="/services" legacyBehavior><a onClick={toggle} className="hover:text-indigo-300">Services</a></Link>
          <Link href="/core-values" legacyBehavior><a onClick={toggle} className="hover:text-indigo-300">Core Values</a></Link>
          <Link href="/contact" legacyBehavior><a onClick={toggle} className="hover:text-indigo-300">Contact</a></Link>
          <Link href="/career" legacyBehavior>
            <a onClick={toggle} className="mt-4 bg-white text-indigo-900 px-6 py-2 rounded-full font-semibold hover:bg-indigo-100">
              Career
            </a>
          </Link>
          <a href="https://wa.me/14632805624" target="_blank" rel="noreferrer" className="text-sm mt-4 text-indigo-200 hover:text-white">
            Chat on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-indigo-900 text-indigo-100 mt-20">
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">Hamilton Care LLC</h3>
          <p className="text-indigo-200 text-sm">
            Compassionate home and community-based care — promoting independence and dignity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-indigo-200">
            <li><Link href="/about" legacyBehavior><a className="hover:text-white">About Us</a></Link></li>
            <li><Link href="/services" legacyBehavior><a className="hover:text-white">Services</a></Link></li>
            <li><Link href="/core-values" legacyBehavior><a className="hover:text-white">Core Values</a></Link></li>
            <li><Link href="/career" legacyBehavior><a className="hover:text-white">Career</a></Link></li>
            <li><Link href="/contact" legacyBehavior><a className="hover:text-white">Contact</a></Link></li>
          </ul>
        </div>

        {/* Contact above social icons */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Contact</h4>

          <div className="text-indigo-200 space-y-2 mb-4">
            <p className="flex items-center gap-2"><MapPin size={16} /> 8704 Montery Rd, Indianapolis, IN 46226</p>
            <p className="flex items-center gap-2"><Phone size={16} /> +1 (463) 280-5624</p>
            <p className="flex items-center gap-2"><Mail size={16} /> info@hamiltoncarellc.com</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/share/17UPsywqDp/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-indigo-200 hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/hamiltoncare_llc?igsh=cTQyZHBvb28wOHN3&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-indigo-200 hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="https://x.com/hamiltonll58355?s=11 " target="_blank" rel="noreferrer" aria-label="Twitter" className="text-indigo-200 hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com/company/hamilton-care-llc/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-indigo-200 hover:text-white">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-indigo-950 py-4 text-center text-sm text-indigo-300">
        © {new Date().getFullYear()} Hamilton Care LLC. All rights reserved.
      </div>
    </footer>
  );
}

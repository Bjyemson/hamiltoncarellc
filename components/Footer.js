// components/Footer.js
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 - Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Hamilton Care</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Providing compassionate, reliable, and professional care for your loved ones.
            We’re committed to improving quality of life and ensuring peace of mind for every family.
          </p>
        </div>

        {/* Column 2 - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> <span>+1 463 280 5624</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> <span>info@hamiltoncarellc.com</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5" />
              <span>8704 Montery Rd, Indianapolis, IN 46226</span>
            </li>
          </ul>
        </div>

        {/* Column 3 - Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect with Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/share/17UPsywqDp/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://x.com/hamiltonll58355?s=11 "
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/hamiltoncare_llc?igsh=cTQyZHBvb28wOHN3&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hamilton Care. All rights reserved.
      </div>
    </footer>
  );
}

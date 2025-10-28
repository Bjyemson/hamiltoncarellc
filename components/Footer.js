function Footer() {
  return (
    <footer className="bg-indigo-900 text-white mt-20">
      <div className="max-w-7xl mx-auto py-12 px-6 grid md:grid-cols-3 gap-8">
        {/* ✅ Column 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Hamilton Care LLC</h3>
          <p className="text-sm text-indigo-200">
            Compassionate care, comfort, and dignity — every day, for every client.
          </p>
        </div>

        {/* ✅ Column 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-indigo-200">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/core-values" className="hover:text-white transition">
                Core Values
              </Link>
            </li>
            <li>
              <Link href="/career" className="hover:text-white transition">
                Career
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* ✅ Column 3 - Contact info ABOVE social links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>

          {/* Contact Info */}
          <p className="text-indigo-200 mb-4">
            📍 8704 Montery Rd, Indianapolis, IN 46226 <br />
            📞 +1 (317) 332-7577 <br />
            ✉️ info@hamiltoncare.com
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-indigo-200 hover:text-white transition" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-indigo-200 hover:text-white transition" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 text-indigo-200 hover:text-white transition" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-indigo-200 hover:text-white transition" />
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

import { useState } from "react";
import { motion } from "framer-motion";

export default function Career() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xwprjvrz", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        e.target.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-indigo-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[url('/images/hero-bg.png')] bg-cover bg-center text-white py-28 text-center">
        <div className="absolute inset-0 bg-indigo-900/80"></div>
        <div className="relative max-w-3xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Build a Career That Makes a Difference
          </motion.h1>
          <p className="text-lg text-indigo-100">
            Join our compassionate team and help bring dignity, comfort, and independence to every client we serve.
          </p>
        </div>
      </section>

      {/* Steps to Apply */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-indigo-800 mb-12"
          >
            Steps to Apply
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: "📝",
                title: "1. Complete Application",
                desc: "Fill out the online employment form with accurate personal and work details.",
              },
              {
                icon: "📄",
                title: "2. Submit Documents",
                desc: "Upload your resume, certifications, and valid ID to complete your application.",
              },
              {
                icon: "💬",
                title: "3. Interview & Screening",
                desc: "We'll reach out to discuss your experience and schedule a formal interview.",
              },
              {
                icon: "🎓",
                title: "4. Training & Onboarding",
                desc: "Complete our DSP training and orientation to prepare for your role in care delivery.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8 shadow-sm text-left"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold text-indigo-700 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-5xl mx-auto px-6 md:flex md:items-center md:gap-12">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="/images/hero-bg.png"
              alt="Required Documents"
              className="rounded-2xl shadow-lg w-full h-80 object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-indigo-800 mb-6">
              Required Documentation
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>✅ Government-issued ID (Driver’s License, Passport, or National ID)</li>
              <li>✅ Updated Resume or CV</li>
              <li>✅ Two Professional References</li>
              <li>✅ Caregiver or Healthcare Certification (if applicable)</li>
              <li>✅ Background Check Authorization Form</li>
            </ul>
            <p className="text-gray-600 mt-6">
              Please have these documents ready before submitting your application to help speed up processing.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-10">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
            Employment Application
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="Full Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="Email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="Phone"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Upload Resume</label>
              <input
                type="file"
                name="Resume"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Why do you want to join Hamilton Care?
              </label>
              <textarea
                name="Message"
                rows="4"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Share a bit about your passion for caregiving..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full font-semibold py-3 rounded-lg shadow-md transition ${
                status === "sending"
                  ? "bg-indigo-400 text-white cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              {status === "sending" ? "Submitting..." : "Submit Application"}
            </button>
          </form>

          {status === "success" && (
            <p className="text-green-600 mt-6 text-center font-medium">
              ✅ Thank you! Your application has been received.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 mt-6 text-center font-medium">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-indigo-700 text-white text-center py-16">
        <h3 className="text-2xl font-semibold mb-3">
          Need help with your application?
        </h3>
        <p className="text-indigo-100 mb-6">
          Our HR team is here to assist you every step of the way.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-indigo-50 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "react-feather";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/xqaynrkd", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Contact Us
          </motion.h1>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
            We’d love to hear from you! Reach out for questions, care inquiries,
            or to schedule a consultation.
          </p>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-indigo-800 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Whether you need in-home care, companionship, or support for a
              loved one, our team is ready to help.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-indigo-600" size={22} />
                <p className="text-gray-700">+1 463 280 5624</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-indigo-600" size={22} />
                <p className="text-gray-700">info@hamiltoncarellc.com</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-indigo-600" size={22} />
                <p className="text-gray-700">8704 Montery Rd, Indianapolis, IN 46226</p>
              </div>
            </div>

            <a
              href="https://wa.me/14632805624"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-green-600 transition mt-6"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-indigo-50 p-8 rounded-2xl shadow-md space-y-6"
          >
            <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
              Send Us a Message
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full border border-indigo-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-indigo-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                rows="5"
                className="w-full border border-indigo-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-indigo-700 text-white font-semibold py-3 rounded-lg hover:bg-indigo-800 transition"
            >
              {status === "sending"
                ? "Sending..."
                : status === "success"
                ? "Message Sent ✅"
                : status === "error"
                ? "Error! Try again"
                : "Send Message"}
            </button>
          </motion.form>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full">
        <iframe
          title="Hamilton Care Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.744183495097!2d3.379205474992867!3d6.428055693552103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf50b22a9a22f%3A0x8c41eb25dcba81f1!2sLagos!5e0!3m2!1sen!2sng!4v1696870000000!5m2!1sen!2sng"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0"
        ></iframe>
      </section>
    </div>
  );
}

// pages/apply.js
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Apply() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleFile(e) {
    const file = e.target.files[0];
    setResumeFile(file || null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.phone || !form.position) {
      setError("Please complete all required fields.");
      return;
    }

    setStatus("sending");

    try {
      const data = new FormData();
      Object.entries(form).forEach(([key, val]) => data.append(key, val));
      if (resumeFile) data.append("resume", resumeFile);

      const res = await fetch("/api/apply", { method: "POST", body: data });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", position: "", message: "" });
        setResumeFile(null);
      } else {
        const body = await res.json().catch(() => ({}));
        setError(body.error || "Server rejected submission.");
        setStatus("error");
      }
    } catch (err) {
      setError("Network or server error. Try again.");
      setStatus("error");
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-indigo-50 text-slate-900 relative overflow-hidden">
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Application form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-indigo-800 mb-2">Employment Application</h1>
                <p className="text-gray-600 mb-6">
                  Join Hamilton Care — please complete the form below and upload your resume.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone *</label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Position applying for *
                    </label>
                    <select
                      name="position"
                      required
                      value={form.position}
                      onChange={handleChange}
                      className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">Select a position</option>
                      <option>Caregiver</option>
                      <option>Direct Support Professional (DSP)</option>
                      <option>Respite Care Specialist</option>
                      <option>Administrative / Office</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Upload Resume (optional)
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFile}
                      className="mt-1 block w-full text-sm text-gray-600"
                    />
                    {resumeFile && (
                      <div className="mt-2 text-sm text-gray-700">
                        Selected: {resumeFile.name}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Message (optional)
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="4"
                      className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  {error && <p className="text-sm text-red-600">{error}</p>}

                  <div className="flex gap-3">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className={`px-6 py-3 rounded-full font-semibold transition ${
                        status === "sending"
                          ? "bg-indigo-400 text-white cursor-not-allowed"
                          : "bg-indigo-600 text-white hover:bg-indigo-700"
                      }`}
                    >
                      {status === "sending" ? "Submitting..." : "Submit Application"}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setForm({ name: "", email: "", phone: "", position: "", message: "" });
                        setResumeFile(null);
                        setStatus("idle");
                        setError("");
                      }}
                      className="px-4 py-3 rounded-full border font-medium text-indigo-700 hover:bg-indigo-50"
                    >
                      Clear
                    </button>
                  </div>
                </form>
              </div>

              {/* Right: Steps */}
              {/* Right: Steps */}
<aside className="space-y-6">
  <div className="bg-white rounded-2xl shadow-lg p-6">
    <h3 className="text-lg font-semibold text-indigo-800 mb-3">Steps to Apply</h3>
    <div className="space-y-4">
      {[
        { icon: "📝", title: "Complete Application", text: "Fill out all required information accurately." },
        { icon: "📎", title: "Upload Resume", text: "Attach your resume in PDF or DOC format." },
        { icon: "📄", title: "Provide Documents", text: "Submit identification and references when requested." },
        { icon: "📞", title: "Phone Screening", text: "A recruiter will reach out for a short phone interview." },
        { icon: "🤝", title: "Interview & Onboarding", text: "Attend your in-person interview and orientation." },
      ].map((step, i) => (
        <div
          key={i}
          className="flex items-start bg-indigo-50 rounded-xl p-4 hover:bg-indigo-100 transition"
        >
          <div className="text-3xl mr-4">{step.icon}</div>
          <div>
            <h4 className="font-semibold text-indigo-800">{step.title}</h4>
            <p className="text-gray-700 text-sm">{step.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="bg-white rounded-2xl shadow-lg p-6">
    <h4 className="font-semibold text-indigo-800 mb-2">Need help?</h4>
    <p className="text-gray-700 text-sm">
      If you have trouble submitting, email{" "}
      <a
        href="mailto:careers@hamiltoncarellc.com"
        className="text-indigo-600 hover:underline"
      >
        careers@hamiltoncarellc.com
      </a>{" "}
      or WhatsApp{" "}
      <a
        className="text-indigo-600 hover:underline"
        href="https://wa.me/14632805624"
      >
        +1-463-280-5624
      </a>.
    </p>
  </div>
</aside>

            </div>
          </div>
        </section>

        {/* ✅ Success Modal */}
        <AnimatePresence>
          {status === "success" && (
            <motion.div
              className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-xl text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <h2 className="text-2xl font-bold text-green-600 mb-3">Application Submitted!</h2>
                <p className="text-gray-700 mb-6">
                  Thank you for applying. Our team will review your information and contact you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
    </>
  );
}

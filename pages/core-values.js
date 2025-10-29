// pages/core-values.js
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Shield, Users, Smile, Star, Clock } from "react-feather";

export default function CoreValues() {
  const values = [
    {
      Icon: Heart,
      title: "Compassion",
      desc:
        "We provide care with empathy and understanding — treating every client as family, with warmth and respect.",
    },
    {
      Icon: Shield,
      title: "Decision Making",
      desc:
        "Personal outcomes — safety, wellness, relationships and community inclusion — are best achieved when individuals are actively involved in planning and decision-making.",
    },
    {
      Icon: Users,
      title: "Partners & Facilitators",
      desc:
        "Staff serve as partners and facilitators, helping people access opportunities, resources, and natural supports to reach their goals.",
    },
    {
      Icon: Smile,
      title: "Respect",
      desc: "Every person has inherent worth and is treated with dignity and respect in all we do.",
    },
    {
      Icon: Clock,
      title: "Rights & Freedom",
      desc:
        "People have the right to make choices, take risks, and exercise control over their own lives.",
    },
    {
      Icon: Star,
      title: "Support",
      desc:
        "Support is personalized and built around each individual’s goals, preferences, and strengths.",
    },
  ];

  return (
    <>
      <Head>
        <title>Core Values — Hamilton Care LLC</title>
        <meta name="description" content="Hamilton Care — Our core principles and values that guide our care." />
      </Head>

      <Header />

      <main className="text-gray-800">
        {/* Hero */}
        <section className="relative bg-indigo-900 text-white py-28 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
            >
              Our Core Values
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 text-indigo-200 max-w-2xl mx-auto text-lg"
            >
              At Hamilton Care, our values are the foundation of every relationship,
              every visit, and every act of compassion.
            </motion.p>
          </div>
        </section>

        {/* Values grid */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-indigo-800 mb-10"
            >
              The Principles That Guide Us
            </motion.h2>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {values.map((v, i) => {
                const Icon = v.Icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                    className="bg-indigo-50 p-6 rounded-2xl shadow-sm hover:shadow-lg"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="inline-flex items-center justify-center rounded-full bg-white p-3 ring-1 ring-indigo-100 mb-4">
                        <Icon size={28} className="text-indigo-700" />
                      </div>
                      <h3 className="text-lg font-semibold text-indigo-800 mb-2">{v.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-indigo-900 text-white py-16 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              Guided by Values, Driven by Care
            </motion.h3>
            <p className="text-indigo-200 mb-8">
              Every caregiver at Hamilton Care is inspired by these values — ensuring compassionate, reliable, and exceptional care.
            </p>

            <Link href="/contact" className="inline-block bg-white text-indigo-900 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-indigo-100 transition">
              Contact Us
            </Link>
          </div>
        </section>
      </main>

     
    </>
  );
}

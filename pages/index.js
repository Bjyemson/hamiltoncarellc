"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect: moves the background slightly slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div ref={ref} className="text-gray-800 overflow-hidden">
      {/* ✅ HERO SECTION (with Parallax background) */}
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-bg.png')",
            y,
          }}
        ></motion.div>

        <div className="absolute inset-0 bg-indigo-900/80 md:bg-indigo-900/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-4 sm:px-6 md:px-8 max-w-2xl sm:max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
            Compassionate Care for a Better Tomorrow
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-indigo-100 mb-6 sm:mb-8 leading-relaxed">
            At Hamilton Care LLC, we provide personalized home care services
            that promote independence, comfort, and dignity for every client.
          </p>

          <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
            <Link
              href="/about"
              className="bg-white text-indigo-700 font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md hover:bg-indigo-50 transition"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ✅ ABOUT SECTION */}
      <motion.section
        className="py-20 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={sectionVariants}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <motion.h2
            variants={sectionVariants}
            className="text-3xl md:text-4xl font-bold text-indigo-800 mb-6"
          >
            Who We Are
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            className="text-gray-600 max-w-2xl mx-auto mb-10"
          >
            We are a dedicated team of caregivers committed to improving lives
            through compassionate, reliable, and high-quality care. Our mission
            is to support individuals and families by providing tailored care
            that respects their dignity and promotes independence.
          </motion.p>
          <motion.div variants={sectionVariants}>
            <Link
              href="/about"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Learn more about our story →
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ✅ SERVICES SECTION */}
      <motion.section
        className="py-20 bg-indigo-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={sectionVariants}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <motion.h2
            variants={sectionVariants}
            className="text-3xl md:text-4xl font-bold text-indigo-800 mb-12"
          >
            Partnership Program
          </motion.h2>

          <motion.p
            variants={sectionVariants}
            className="text-gray-600 max-w-2xl mx-auto mb-10"
          >
            At Hamilton Care, we believe care starts with family. Through our
            Family Partnership Program, we make it possible for your trusted
            loved ones or close friends to become certified caregivers. Once
            they’ve completed our simple qualification process, they can join
            our team of Direct Support Professionals (DSPs)—delivering
            personalized Participant Assistance and Care (PAC) and short-term
            Respite Care that keeps your family supported, comfortable, and
            cared for every step of the way.
          </motion.p>

          <motion.div variants={sectionVariants} className="mt-12">
            <Link
              href="/services"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
            >
              View All Services
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ✅ VISION SECTION */}
      <motion.section
        className="py-20 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={sectionVariants}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <motion.h2
            variants={sectionVariants}
            className="text-3xl md:text-4xl font-bold text-indigo-800 mb-6"
          >
            Vision Statement
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            className="text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Hamilton Care LLC envisions a community where every individual is
            empowered to live a meaningful, self-directed life with dignity,
            respect, and opportunity. We strive for an inclusive environment in
            which personal goals, independence, and community connections are
            fully realized.
          </motion.p>
          <motion.div variants={sectionVariants}>
            <Link
              href="/core-values"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Discover what drives us →
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ✅ CAREER SECTION */}
      <motion.section
        className="py-20 bg-indigo-600 text-white text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={sectionVariants}
          className="max-w-4xl mx-auto px-6"
        >
          <motion.h2
            variants={sectionVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Join Our Compassionate Team
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            className="text-indigo-100 mb-8"
          >
            Are you passionate about making a difference? Hamilton Care LLC is
            always looking for dedicated caregivers who share our mission of
            compassion and dignity.
          </motion.p>
          <motion.div variants={sectionVariants}>
            <Link
              href="/career"
              className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-indigo-50 transition"
            >
              Apply Now
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

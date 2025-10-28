import { motion } from "framer-motion";
import { Heart, Shield, Users, Smile, Star, Clock } from "react-feather";

export default function CoreValues() {
  const values = [
    {
      icon: <Heart size={36} className="text-indigo-700 mb-4" />,
      title: "Compassion",
      desc: "We provide care with empathy and understanding — treating every client as family, with warmth and respect.",
    },
    {
      icon: <Shield size={36} className="text-indigo-700 mb-4" />,
      title: "Decision Making",
      desc: "Personal outcomes—such as safety, wellness, relationships, employment, and community inclusion—are best achieved when individuals are actively involved in planning and decision-making.",
    },
    {
      icon: <Users size={36} className="text-indigo-700 mb-4" />,
      title: "Partners and Facilitators",
      desc: "Staff serve as partners and facilitators, helping people access opportunities, resources, and natural support to achieve their desired outcomes.",
    },
    {
      icon: <Smile size={36} className="text-indigo-700 mb-4" />,
      title: "Respect",
      desc: "Every person has inherent worth and must be treated with dignity and respect.",
    },
    {
      icon: <Clock size={36} className="text-indigo-700 mb-4" />,
      title: "Rights and Freedom",
      desc: "People have the right to make choices, take risks, and exercise control over their own lives.",
    },
    {
      icon: <Star size={36} className="text-indigo-700 mb-4" />,
      title: "Support",
      desc: "Support must be tailored to the individual’s goals, preferences, and strengths.",
    },
  ];

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
            Our Core Values
          </motion.h1>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
            At Hamilton Care, our values are the foundation of every relationship,
            every visit, and every act of compassion.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-indigo-800 mb-12"
          >
            The Principles That Guide Us
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-indigo-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition cursor-default"
              >
                <div className="flex flex-col items-center text-center">
                  {value.icon}
                  <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-900 text-white py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Guided by Values, Driven by Care
          </h2>
          <p className="text-indigo-200 mb-8">
            Every caregiver at Hamilton Care is inspired by these values — ensuring
            compassionate, reliable, and exceptional care for you and your loved ones.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-900 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-indigo-100 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </div>
  );
}

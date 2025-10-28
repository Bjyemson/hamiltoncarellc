import { motion } from "framer-motion";

export default function About() {
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
            About Hamilton Care LLC
          </motion.h1>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
            The mission of Hamilton Care LLC is to provide person-centered support that promotes independence, protects rights, and enhances quality of life. We partner with individuals, families, and communities to ensure each person achieves outcomes that matter most to them—whether in health, relationships, employment, or personal growth.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="/images/about-teamz.jpg"
            alt="Hamilton Care Team"
            className="rounded-2xl shadow-lg object-cover w-full h-96"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-indigo-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Hamilton Care LLC was founded on the belief that quality care
              starts with compassion. Our caregivers are dedicated professionals
              who go beyond daily tasks — we provide companionship, emotional
              support, and a helping hand that feels like family.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether it’s assisting with personal care, offering emotional
              companionship, or managing home support, we are here to ensure our
              clients feel valued, respected, and cared for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To provide exceptional home care services that enhance the quality
              of life for our clients through compassion, respect, and
              professionalism.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading provider of compassionate care that empowers
              individuals to live independently and confidently in their homes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-indigo-800 mb-10"
          >
            Why Choose Hamilton Care?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced Caregivers",
                desc: "Our professionals are trained, empathetic, and passionate about making a difference.",
              },
              {
                title: "Personalized Care Plans",
                desc: "We tailor every service to meet the unique needs and preferences of each client.",
              },
              {
                title: "24/7 Support",
                desc: "We are always available to provide guidance, reassurance, and immediate care.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-indigo-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <h4 className="text-xl font-semibold text-indigo-700 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

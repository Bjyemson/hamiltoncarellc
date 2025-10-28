import { motion } from "framer-motion";
import { Heart, Home, UserCheck, Clock, Smile, Activity } from "react-feather";

export default function Services() {
  const services = [
    {
      icon: <Home size={36} className="text-indigo-700 mb-4" />,
      title: "Community Integration and Habilitation (CIH)",
      desc: (
        <>
          Community Transition <br />
          Day Habilitation <br />
          Residential Habilitation <br />
          Respite Services <br />
          Structured Family Caregiving <br />
          Transportation <br />
          Wellness Coordination
        </>
      ),
    },
    {
      icon: <Heart size={36} className="text-indigo-700 mb-4" />,
      title: "Family Support Waiver",
      desc: (
        <>
          Day Habilitation <br />
          Participant Assistance Care (PAC) <br />
          Respite Services <br />
          Transportation
        </>
      ),
    },
    {
      icon: <Clock size={36} className="text-indigo-700 mb-4" />,
      title: "Money Follow Person (CIH Transfer)",
      desc: (
        <>
          Community Transition <br />
          Day Habilitation <br />
          Residential Habilitation <br />
          Respite Services <br />
          Structured Family Caregiving <br />
          Transportation <br />
          Wellness Coordination
        </>
      ),

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
            Our Care Services
          </motion.h1>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
            Compassionate, personalized, and professional home care — designed
            to bring comfort and dignity to every client we serve.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-indigo-800 mb-12"
          >
            What We Offer
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-indigo-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition cursor-default"
              >
                <div className="flex flex-col items-center text-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
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
            Ready to Experience Quality Home Care?
          </h2>
          <p className="text-indigo-200 mb-8">
            Let’s talk about how Hamilton Care can support you or your loved
            one’s daily living and emotional well-being.
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

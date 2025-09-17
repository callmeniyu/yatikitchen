// components/Experiences.js
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiCoffee, FiHome, FiMap, FiPackage } from "react-icons/fi";

export default function Experiences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      icon: <FiCoffee className="text-3xl" />,
      title: "Authentic Dining",
      description:
        "Savor home-cooked Malaysian meals prepared with local ingredients and traditional recipes.",
      delay: 0.1,
    },
    {
      icon: <FiHome className="text-3xl" />,
      title: "Cozy Accommodations",
      description:
        "Experience comfortable stays with authentic Cameron Highlands charm and hospitality.",
      delay: 0.2,
    },
    {
      icon: <FiMap className="text-3xl" />,
      title: "Guided Adventures",
      description:
        "Discover hidden gems and popular attractions with our knowledgeable local guides.",
      delay: 0.3,
    },
    {
      icon: <FiPackage className="text-3xl" />,
      title: "Curated Packages",
      description:
        "Enjoy seamless experiences that combine meals, accommodation, and tours at great value.",
      delay: 0.4,
    },
  ];

  return (
    <section id="experiences" ref={ref} className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Experiences
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover the perfect blend of nature, culture, and comfort with Yati
            Kitchen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: exp.delay }}
              className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-4">
                {exp.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {exp.title}
              </h3>
              <p className="text-slate-400">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

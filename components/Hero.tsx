// components/Hero.js
"use client";
import { motion } from "framer-motion";
import { FiArrowDown, FiUsers, FiStar } from "react-icons/fi";
import { AuroraText } from "@/components/ui/aurora-text";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#a7dda1]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#a7dda1]/5 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-slate-100">Experience </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a7dda1] to-[#a7dda1]">
              Cameron Highlands
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Home-cooked meals, cozy local stays, and authentic Malaysian
            hospitality in the heart of Cameron Highlands
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={() => scrollToSection("packages")}
              className="bg-gradient-to-r from-[#a7dda1] to-[#a7dda1] hover:from-[#8bc786] hover:to-[#8bc786] text-white font-medium py-4 px-8 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-[#a7dda1]/20 hover:shadow-[#a7dda1]/40"
            >
              Explore Packages
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-slate-800/50 hover:bg-slate-800/70 backdrop-blur-sm text-slate-200 font-medium py-4 px-8 rounded-lg border border-slate-700 transition-all duration-300 hover:shadow-lg"
            >
              Contact Us
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-10 mb-16"
          >
            <div className="flex items-center">
              <div className="bg-[#a7dda1]/20 backdrop-blur-sm rounded-full p-3 mr-4">
                <FiUsers className="text-2xl text-[#a7dda1]" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">50,000+</p>
                <p className="text-slate-400">Happy Travelers</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-[#a7dda1]/20 backdrop-blur-sm rounded-full p-3 mr-4">
                <FiStar className="text-2xl text-[#a7dda1]" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white">4.9/5</p>
                <p className="text-slate-400">Guest Rating</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-16 -right-16 transform -translate-x-1/2"
          >
            <button
              onClick={() => scrollToSection("experiences")}
              className="animate-bounce p-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-300 hover:text-[#a7dda1] transition-colors"
            >
              <FiArrowDown size={24} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

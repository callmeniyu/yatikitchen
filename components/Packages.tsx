// components/Packages.js
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiCheck, FiMapPin, FiCoffee, FiHome } from "react-icons/fi";

export default function Packages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const packages = [
    {
      title: "2D2N Deluxe King Studio, 1 King Bed",
      price: "RM999",
      for: "for 2 Adults",
      description: "Comfortable studio stay with breakfast & dinner",
      highlights: [
        "Spacious and cozy studio in a prime central location",
        "Fresh continental breakfast served daily",
        "Flavorful dinners with traditional Malaysian specialties",
        "Perfect for couples seeking comfort, convenience, and a touch of local culture",
      ],
      popular: true,
      delay: 0.1,
    },
    {
      title: "2D2N Two-Bedroom Studio with Balcony",
      price: "RM1799",
      for: "for 4 Adults",
      description:
        "Two-bedroom studio with private balcony, great for families",
      highlights: [
        "Comfortable two-bedroom studio with private balcony",
        "Ideal for families or small groups",
        "Daily continental breakfast and dinner with traditional Malaysian dishes included",
        "Centrally located for easy access to attractions",
      ],
      popular: false,
      delay: 0.3,
    },
  ];

  const checkIn = "2:00 PM";
  const checkOut = "12:00 PM";

  return (
    <section id="packages" ref={ref} className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Popular Packages
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Curated experiences that combine the best of Cameron Highlands
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: pkg.delay }}
              className={`rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                pkg.popular ? "ring-2 ring-[#a7dda1] relative" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-[#a7dda1] text-slate-900 px-4 py-1 rounded-bl-lg font-medium z-10">
                  Most Popular
                </div>
              )}

              <div className="bg-gradient-to-r from-[#a7dda1] to-[#8bc786] p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <div className="flex items-end">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  <span className="ml-2 opacity-90">{pkg.for}</span>
                </div>
                <p className="mt-2 opacity-90">{pkg.description}</p>
              </div>

              <div className="h-full p-6 bg-slate-800/50 backdrop-blur-md border border-slate-700 border-t-0">
                <div className="mb-6">
                  <h4 className="font-semibold text-white flex items-center mb-3">
                    <FiHome className="mr-2 text-[#a7dda1]" /> Accommodation
                  </h4>
                  <p className="text-slate-300">{pkg.highlights[0]}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white flex items-center mb-3">
                    <FiMapPin className="mr-2 text-[#a7dda1]" /> Tour Highlights
                  </h4>
                  <ul className="text-slate-300 space-y-2">
                    {pkg.highlights.slice(1, 3).map((item, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheck className="text-[#a7dda1] mt-1 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white flex items-center mb-3">
                    <FiCoffee className="mr-2 text-[#a7dda1]" /> Meals Included
                  </h4>
                  <p className="text-slate-300">{pkg.highlights[3]}</p>
                </div>

                <div className="mb-4 text-slate-300">
                  <div>
                    <span className="font-medium text-white mr-2">
                      Check-In:
                    </span>
                    <span>{checkIn}</span>
                  </div>
                  <div>
                    <span className="font-medium text-white mr-2">
                      Check-Out:
                    </span>
                    <span>{checkOut}</span>
                  </div>
                </div>

                <button className="mt-auto w-full bg-[#a7dda1] hover:bg-[#8bc786] text-slate-900 font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg shadow-[#a7dda1]/20 hover:shadow-[#a7dda1]/40">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

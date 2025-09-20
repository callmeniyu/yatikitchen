// components/Testimonials.js
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiStar } from "react-icons/fi";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Siauhui",
      origin: "United States",
      text: "Almost everything, the house is clean and the location is superb. The host is super helpful and friendly, we really enjoyed during our stay",
      rating: 5,
      delay: 0.1,
    },
    {
      name: "Imran",
      origin: "Pakistan",
      text: "The location was perfect, the flat was clean and comfy. The host was very friendly and also helpful he already prepared everything ready for us before we arrived",
      rating: 5,
      delay: 0.2,
    },
    {
      name: "Aisha Rahman",
      origin: "Malaysia",
      text: "Excellent view of Tanah Rata and beyond from the balcony. Location is right in the heart of Tanah Rata, opposite Maybank",
      rating: 5,
      delay: 0.3,
    },
  ];

  return (
    <section id="testimonials" ref={ref} className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Guest Experiences
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Hear from travelers who have experienced the warmth of Yati Kitchen
            & Home
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: testimonial.delay }}
              className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700 hover:border-[#a7dda1]/30 transition-all duration-500"
            >
              <div className="flex items-center mb-4">
                <div>
                  <h4 className="font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-400">{testimonial.origin}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`${
                      i < testimonial.rating
                        ? "text-[#a7dda1] fill-[#a7dda1]"
                        : "text-slate-600"
                    }`}
                  />
                ))}
              </div>

              <p className="text-slate-300 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

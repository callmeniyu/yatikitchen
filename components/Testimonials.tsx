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
      name: "Sarah Johnson",
      origin: "United Kingdom",
      text: "The food at Yati Kitchen was absolutely incredible! Authentic Malaysian flavors and such a warm, welcoming atmosphere.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      delay: 0.1,
    },
    {
      name: "Michael Chen",
      origin: "Singapore",
      text: "The tour package was excellent value. Our guide was knowledgeable and showed us parts of Cameron Highlands we would never have found on our own.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      delay: 0.2,
    },
    {
      name: "Aisha Rahman",
      origin: "Malaysia",
      text: "Staying at Yati Home felt like visiting family. The room was cozy, clean, and had a beautiful view of the hills. Will definitely return!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
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
              className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700 hover:border-amber-500/30 transition-all duration-500"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
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
                        ? "text-amber-400 fill-amber-400"
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

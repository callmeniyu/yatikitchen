// components/LocalFlavors.tsx
"use client";
import { motion } from "framer-motion";
import { FiClock, FiMapPin } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";

const dishes = [
  {
    id: "nasi-lemak",
    name: "Nasi Lemak",
    image: "/images/nasi_lemak.jpg",
    description:
      "Fragrant coconut rice served with fresh cucumber, roasted peanuts, hard-boiled egg, and our signature spicy sambal. A Malaysian breakfast classic made with locally sourced rice and fresh vegetables from Cameron Highlands.",
  },
  {
    id: "black-pepper-chicken",
    name: "Black Pepper Chicken Fry",
    image: "/images/blackpepperchickenfry.jpg",
    description:
      "Tender chicken pieces wok-fried with aromatic black pepper, onions, and bell peppers. Our signature dish uses free-range chicken and fresh herbs grown in the cool climate of Cameron Highlands.",
  },
  {
    id: "sayur-lodeh",
    name: "Sayur Lodeh",
    image: "/images/sayur_lodeh.jpeg",
    description:
      "Traditional Malaysian vegetable curry cooked in creamy coconut milk with mixed vegetables including cabbage, green beans, and tofu. Made with organic vegetables harvested fresh from local Cameron Highlands farms.",
  },
];

export default function LocalFlavors() {
  return (
    <section id="local-flavors" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#a7dda1]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-slate-700/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-slate-100">Local </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a7dda1] to-[#8bc786]">
              Flavors
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Authentic Malaysian cuisine crafted with love using fresh, locally
            grown ingredients from the fertile highlands of Cameron Highlands
          </p>

          {/* Cameron Highlands Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center bg-[#a7dda1]/10 backdrop-blur-sm border border-[#a7dda1]/20 rounded-full px-6 py-3 mb-8"
          >
            <LuLeaf className="text-[#a7dda1] mr-2" />
            <span className="text-slate-200 font-medium">
              Locally Grown • Freshly Prepared
            </span>
          </motion.div>
        </motion.div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="bg-slate-800/50 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-700 transition-all duration-500 transform group-hover:border-[#a7dda1]/30 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-[#a7dda1]/10">
                {/* Image Container */}
                <div className="relative overflow-hidden pointer-events-none">
                  <motion.img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Content */}
                <div className="p-6 pointer-events-none">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#a7dda1] transition-colors duration-300">
                    {dish.name}
                  </h3>

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {dish.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="mt-6 pt-4 border-t border-slate-700">
                    <div className="flex items-center justify-center">
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#a7dda1] to-transparent"></div>
                      <LuLeaf className="text-[#a7dda1] mx-3" />
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#a7dda1] to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Farm to Table Experience
            </h3>
            <p className="text-slate-300 mb-6">
              Every dish is prepared with ingredients sourced directly from
              Cameron Highlands&apos; organic farms, ensuring maximum freshness
              and authentic flavors in every bite.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-slate-400">
              <div className="flex items-center">
                <LuLeaf className="text-[#a7dda1] mr-2" />
                Organic
              </div>
              <div className="flex items-center">
                <FiMapPin className="text-[#a7dda1] mr-2" />
                Local
              </div>
              <div className="flex items-center">
                <FiClock className="text-[#a7dda1] mr-2" />
                Fresh Daily
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

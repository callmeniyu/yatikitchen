"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const galleryImages = [
  {
    src: "/images/building1.jpg",
    alt: "Beautiful exterior view of Yati Kitchen & Home",
    title: "Our Welcoming Exterior",
  },
  {
    src: "/images/livingroom.jpg",
    alt: "Cozy living room with traditional Malaysian decor",
    title: "Comfortable Living Space",
  },
  {
    src: "/images/livingroom2.jpg",
    alt: "Another view of our spacious living area",
    title: "Relaxing Common Area",
  },
  {
    src: "/images/room1.jpg",
    alt: "Clean and comfortable guest room",
    title: "Comfortable Guest Room",
  },
  {
    src: "/images/corridor.jpg",
    alt: "Well-lit corridor connecting all areas",
    title: "Bright Corridors",
  },
  {
    src: "/images/wahsroom.jpg",
    alt: "Clean and modern washroom facilities",
    title: "Modern Washroom",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-[#a7dda1]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-slate-800/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-slate-100">Explore Our </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a7dda1] to-[#a7dda1]">
              Beautiful Space
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Step inside and discover the warm, welcoming atmosphere that makes
            Yati Kitchen your perfect home away from home in Cameron Highlands.
          </p>
        </motion.div>

        {/* Creative Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Large featured image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2 relative group cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => openModal(0)}
          >
            <Image
              width={800}
              height={800}
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <h3 className="text-2xl font-bold mb-2">
                {galleryImages[0].title}
              </h3>
              <div className="w-12 h-1 bg-[#a7dda1] rounded-full"></div>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#a7dda1]/50 rounded-2xl transition-colors duration-500 pointer-events-none"></div>
          </motion.div>

          {/* Smaller images in creative arrangement */}
          {galleryImages.slice(1).map((image, index) => {
            const actualIndex = index + 1;
            const delays = [0.2, 0.3, 0.4, 0.5, 0.6];

            return (
              <motion.div
                key={actualIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: delays[index] }}
                viewport={{ once: true }}
                className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                  index === 0 ? "lg:row-span-1" : ""
                } ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
                onClick={() => openModal(actualIndex)}
              >
                <div className="aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <h4 className="text-lg font-semibold">{image.title}</h4>
                  <div className="w-8 h-0.5 bg-[#a7dda1] rounded-full mt-1"></div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#a7dda1]/40 rounded-xl transition-colors duration-500 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={() => openModal(0)}
            className="bg-[#a7dda1] hover:bg-[#8bc786] text-slate-900 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-[#a7dda1]/20 hover:shadow-[#a7dda1]/40"
          >
            View Full Gallery
          </button>
        </motion.div>
      </div>

      {/* Modal/Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] bg-slate-800 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-slate-900/50 hover:bg-slate-900/70 text-white p-2 rounded-full transition-colors"
            >
              <FiX size={24} />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-slate-900/50 hover:bg-slate-900/70 text-white p-2 rounded-full transition-colors"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-slate-900/50 hover:bg-slate-900/70 text-white p-2 rounded-full transition-colors"
            >
              <FiChevronRight size={24} />
            </button>

            {/* Image */}
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-auto max-h-[70vh] object-contain"
            />

            {/* Image info */}
            <div className="p-6 border-t border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-2">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-slate-300">
                {galleryImages[selectedImage].alt}
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-2">
                  {galleryImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === selectedImage
                          ? "bg-[#a7dda1]"
                          : "bg-slate-600"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-slate-400 text-sm">
                  {selectedImage + 1} of {galleryImages.length}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

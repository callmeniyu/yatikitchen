// components/Layout.js
"use client";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Meteors } from "@/components/ui/meteors";
import ScrollSpyNav from "./ScrollSpyNav";

import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background image layer - z-index 0 */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 z-0"></div>

      {/* Meteors background layer - z-index 10, above background but below content */}
      <div className="fixed inset-0 overflow-hidden z-10 pointer-events-none">
        <Meteors />
      </div>

      {/* Content layers - z-index 20+ */}
      <div className="relative z-20">
        <ScrollSpyNav />
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </div>
  );
}

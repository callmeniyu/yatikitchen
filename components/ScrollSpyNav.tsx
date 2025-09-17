"use client";

import { useEffect, useState } from "react";
import {
  FiHome,
  FiClock,
  FiPackage,
  FiImage,
  FiStar,
  FiPhone,
} from "react-icons/fi";

const items = [
  { id: "hero", icon: <FiHome />, label: "Home" },
  { id: "experiences", icon: <FiStar />, label: "Experiences" },
  { id: "packages", icon: <FiPackage />, label: "Packages" },
  { id: "testimonials", icon: <FiClock />, label: "Testimonials" },
  { id: "contact", icon: <FiPhone />, label: "Contact" },
];

export default function ScrollSpyNav() {
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const sectionEls = items
      .map((it) => document.getElementById(it.id))
      .filter(Boolean) as HTMLElement[];

    if (!sectionEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sectionEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Scrollspy"
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50"
    >
      <div className="w-14 bg-white/8 backdrop-blur-md rounded-3xl p-2 flex flex-col items-center space-y-3 shadow-lg border-[1px] border-white/20">
        {items.map((it) => {
          const isActive = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => {
                const el = document.getElementById(it.id);
                if (el)
                  el.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              title={it.label}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all ${
                isActive
                  ? "bg-amber-500 text-white scale-110"
                  : "bg-transparent text-slate-200 hover:bg-white/10"
              }`}
            >
              {it.icon}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

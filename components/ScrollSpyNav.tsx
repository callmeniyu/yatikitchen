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
  {
    id: "hero",
    icon: <FiHome className="w-5 h-5 md:w-auto md:h-auto" />,
    label: "Home",
  },
  {
    id: "experiences",
    icon: <FiStar className="w-5 h-5 md:w-auto md:h-auto" />,
    label: "Experiences",
  },
  {
    id: "packages",
    icon: <FiPackage className="w-5 h-5 md:w-auto md:h-auto" />,
    label: "Packages",
  },
  {
    id: "testimonials",
    icon: <FiClock className="w-5 h-5 md:w-auto md:h-auto" />,
    label: "Testimonials",
  },
  {
    id: "contact",
    icon: <FiPhone className="w-5 h-5 md:w-auto md:h-auto" />,
    label: "Contact",
  },
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
      className="fixed z-50 left-1/2 -translate-x-1/2 sm:left-6 sm:-translate-x-0
        bottom-0 md:top-1/2 transform -translate-y-1/2
        sm:transform md:-translate-y-1/2
        w-96 md:w-full sm:w-auto
        px-2 sm:px-0"
      style={{ maxWidth: "100vw" }}
    >
      <div className="md:w-14 bg-white/8 backdrop-blur-md rounded-3xl p-2 flex md:flex-col items-center space-y-0 sm:space-y-3 space-x-3 sm:space-x-0 shadow-lg border-[1px] border-white/20 justify-center">
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
              className={`w-16 h-16 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white transition-all ${
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

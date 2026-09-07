"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["Projects", "About", "Lab", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]"
    >
      <nav className="max-w-container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="text-white text-2xl font-bold tracking-tightest">
          SPECTOR
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-white/70 hover:text-white text-sm uppercase tracking-widest transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-[#0A0A0A] border-t border-white/10 px-6 pb-6"
        >
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-white/70 hover:text-white text-sm uppercase tracking-widest transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}

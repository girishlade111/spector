"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function Showreel() {
  return (
    <section className="relative h-[80vh] min-h-[500px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer group"
        aria-label="Play showreel"
      >
        <div className="w-20 h-20 rounded-full border-2 border-white/60 flex items-center justify-center group-hover:bg-white/20 transition-colors group-hover:scale-110 transition-transform duration-300">
          <Play size={32} className="text-white fill-white ml-1" />
        </div>
        <div className="mt-6 text-center">
          <p className="text-white text-lg font-bold tracking-tight">SPECTOR / SHOWREEL</p>
          <p className="text-white/50 text-xs uppercase tracking-[0.2em] mt-1">2023 — 2024</p>
        </div>
      </motion.button>
    </section>
  );
}

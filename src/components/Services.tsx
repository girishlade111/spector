"use client";

import { motion } from "framer-motion";
import { Monitor, Palette, Globe, Smartphone } from "lucide-react";

const services = [
  { icon: Palette, label: "Brand Identity" },
  { icon: Monitor, label: "Product Design" },
  { icon: Globe, label: "Web Design" },
  { icon: Smartphone, label: "Motion" },
];

const tech = ["Frontend", "React", "Next.js", "TypeScript", "Tailwind", "Framer"];

export default function Services() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-[#888888] text-[clamp(1rem,3vw,2.5rem)] font-condensed font-bold tracking-tight leading-tight"
        >
          WE BUILD BRANDS.
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-black text-[clamp(1.5rem,4vw,3.5rem)] font-condensed font-bold tracking-tightest leading-none mt-1 mb-16"
        >
          THEN WE GIVE THEM<br />SOMEWHERE TO LIVE
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Left - Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 group cursor-default"
              >
                <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                  <s.icon size={18} />
                </div>
                <span className="text-black font-semibold text-sm uppercase tracking-widest">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Center - Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/3] bg-[#F5F5F5] rounded-2xl overflow-hidden flex items-center justify-center"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop)",
              }}
            />
            <div className="absolute inset-0 bg-black/30" />
            <span className="relative z-10 text-white text-2xl font-bold tracking-tight">
              Development
            </span>
          </motion.div>

          {/* Right - Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {tech.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-black" />
                <span className="text-black/60 text-sm uppercase tracking-widest">{t}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Number */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-right text-[120px] font-condensed font-bold text-[#E5E5E5] leading-none mt-8 -mb-20"
        >
          .04
        </motion.p>
      </div>
    </section>
  );
}

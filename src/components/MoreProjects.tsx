"use client";

import { motion } from "framer-motion";

const moreProjects = [
  { title: "Nexus", year: "2024" },
  { title: "Aether", year: "2024" },
  { title: "Pulse", year: "2023" },
  { title: "Vertex", year: "2023" },
];

const clients = ["Obligon", "Nubo", "Aetheris", "Voxly", "Pulse", "Nexar"];

export default function MoreProjects() {
  return (
    <section className="bg-[#0A0A0A] pb-10">
      <div className="max-w-container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-white text-[clamp(1.5rem,4vw,3rem)] font-condensed font-bold tracking-tightest mb-12"
        >
          MORE PROJECTS
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-4 mb-20">
          {moreProjects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1A1A1A] p-8 flex flex-col items-center justify-center aspect-[3/2] border border-white/5 hover:border-white/20 transition-colors cursor-pointer"
            >
              <span className="text-white text-2xl font-bold tracking-tight">{p.title}</span>
              <span className="text-white/30 text-xs uppercase tracking-widest mt-2">{p.year}</span>
            </motion.div>
          ))}
        </div>

        {/* Our Clients */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-white py-12 px-8"
        >
          <p className="text-black/40 text-xs uppercase tracking-[0.2em] mb-8 text-center">
            Our Clients
          </p>
          <div className="flex flex-wrap justify-center gap-12 items-center">
            {clients.map((c, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-black/20 text-2xl font-bold tracking-tight hover:text-black/40 transition-colors cursor-default"
              >
                {c}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

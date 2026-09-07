"use client";

import { motion } from "framer-motion";

const projects = [
  { title: "Portrait Study", category: "Brand Identity", bg: "#E8B84B", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop" },
  { title: "Automotive", category: "Product Design", bg: "#666666", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" },
  { title: "Winter Sport", category: "Motion", bg: "#2C5F7C", img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop" },
  { title: "Product Studio", category: "Web Design", bg: "#CC3333", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop" },
  { title: "Robotics", category: "Brand Identity", bg: "#F5F5F5", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop" },
  { title: "Portrait Series", category: "Photography", bg: "#2A2A2A", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" },
];

const item = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function SelectedProjects() {
  return (
    <section className="bg-[#0A0A0A] py-28">
      <div className="max-w-container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-[clamp(1.8rem,5vw,4rem)] font-condensed font-bold tracking-tightest leading-none">
            SELECTED PROJECTS
          </h2>
          <p className="text-white/40 text-sm uppercase tracking-[0.15em] mt-4">
            A CURATED SELECTION OF NARRATIVE-DRIVEN CLIENT WORK.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
              className="group relative overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${p.img})` }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <h3 className="text-white text-lg font-bold tracking-tight">{p.title}</h3>
                <p className="text-white/60 text-xs uppercase tracking-widest mt-1">{p.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

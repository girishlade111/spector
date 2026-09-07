"use client";

import { motion } from "framer-motion";
import { Search, GitBranch, Lightbulb } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    desc: "We begin by understanding your brand, your market, and your goals. Research-driven foundations for every decision.",
    timeline: "2-3 days",
  },
  {
    icon: GitBranch,
    title: "Strategy",
    desc: "We map out the user journey, information architecture, and visual direction before writing a single line of code.",
    timeline: "1-2 weeks",
  },
  {
    icon: Lightbulb,
    title: "Concept",
    desc: "We design and prototype the core experience, iterating rapidly until the vision is refined and ready to build.",
    timeline: "2-4 weeks",
  },
];

const stagger = {
  animate: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Process() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-[#888888] text-[clamp(1rem,3vw,2rem)] font-condensed font-bold tracking-tight leading-tight"
        >
          WE DON&apos;T START WITH ANSWERS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-black text-[clamp(1.5rem,4vw,3.5rem)] font-condensed font-bold tracking-tightest leading-none mt-1 mb-16"
        >
          WE START WITH THE RIGHT QUESTIONS
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-12"
        >
          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative"
            >
              <div className="w-14 h-14 rounded-full bg-[#F5F5F5] flex items-center justify-center mb-6 group hover:bg-black hover:text-white transition-colors">
                <s.icon size={24} className="group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-condensed font-bold text-black tracking-tight mb-3">
                {String(i + 1).padStart(2, "0")}. {s.title}
              </h3>
              <p className="text-[#888888] text-sm leading-relaxed mb-4">{s.desc}</p>
              <p className="text-xs uppercase tracking-[0.15em] text-black/40 font-semibold">
                Timeline: {s.timeline}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mt-16"
        >
          <button className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center text-black/40 hover:bg-black hover:text-white hover:border-black transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {[0, 1, 2].map((dot) => (
            <div key={dot} className={`w-2 h-2 rounded-full ${dot === 0 ? "bg-black" : "bg-[#E5E5E5]"}`} />
          ))}
          <button className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center text-black/40 hover:bg-black hover:text-white hover:border-black transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

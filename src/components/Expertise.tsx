"use client";

import { motion } from "framer-motion";
import { Pencil } from "lucide-react";

const cards = [
  {
    type: "founder",
    title: "FROM THE FOUNDER",
    subtitle: "Design is not just what it looks like. Design is how it works.",
    bg: "#F5F5F5",
    textColor: "#000",
  },
  {
    type: "stat",
    label: "7 yrs",
    subtitle: "Creative Practice",
    bg: "#0A0A0A",
    textColor: "#fff",
  },
  {
    type: "cta",
    title: "CLEAR CONTROL.\nFULL VISIBILITY.",
    subtitle: "Every project tracked, every decision transparent.",
    bg: "#FF3333",
    textColor: "#fff",
  },
  {
    type: "plans",
    title: "FLEXIBLE PLANS",
    subtitle: "We tailor our engagement to fit your needs and budget.",
    bg: "#F5F5F5",
    textColor: "#000",
  },
  {
    type: "precision",
    title: "DESIGN PRECISION",
    subtitle: "Every pixel placed with intention and purpose.",
    bg: "#FFFFFF",
    textColor: "#000",
    hasBorder: true,
    icon: true,
  },
  {
    type: "stats",
    stats: [
      { value: "69%", label: "Brand Recall" },
      { value: "72%", label: "Qualified Leads" },
      { value: "98%", label: "Repeat Clients" },
    ],
    bg: "#FF3333",
    textColor: "#fff",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Expertise() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-[#888888] text-sm uppercase tracking-[0.2em] font-semibold mb-3"
        >
          Expertise
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-black text-[clamp(1.5rem,4vw,3.5rem)] font-condensed font-bold tracking-tightest leading-none mb-16 max-w-4xl"
        >
          EVERY PROJECT DESERVES THOUGHT, CARE AND ATTENTION
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.05 }}
              className={`p-8 min-h-[240px] flex flex-col ${card.hasBorder ? "border border-[#E5E5E5]" : ""}`}
              style={{ backgroundColor: card.bg, color: card.textColor }}
            >
              {card.icon && (
                <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center mb-4">
                  <Pencil size={18} className="text-black" />
                </div>
              )}
              {card.title && (
                <h3 className="text-2xl font-condensed font-bold tracking-tight leading-[1.1] whitespace-pre-line mb-2">
                  {card.title}
                </h3>
              )}
              {card.label && (
                <p className="text-4xl font-condensed font-bold tracking-tight mb-1">{card.label}</p>
              )}
              <p className="text-sm leading-relaxed opacity-70 mt-auto">{card.subtitle}</p>
              {card.type === "cta" && (
                <button className="mt-4 border border-white/40 text-white text-xs uppercase tracking-widest py-2 px-4 self-start hover:bg-white hover:text-[#FF3333] transition-colors font-semibold">
                  View Process
                </button>
              )}
              {card.stats && (
                <div className="flex flex-col gap-3 mt-auto">
                  {card.stats.map((s, j) => (
                    <div key={j} className="flex items-baseline gap-3">
                      <span className="text-2xl font-condensed font-bold">{s.value}</span>
                      <span className="text-sm opacity-70">{s.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

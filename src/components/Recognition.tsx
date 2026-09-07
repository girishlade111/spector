"use client";

import { motion } from "framer-motion";

const awards = [
  { name: "D&AD", category: "Design & Art Direction" },
  { name: "Communication Arts", category: "Design Excellence" },
  { name: "AIGA", category: "Design Achievement" },
  { name: "ADC Awards", category: "Art Directors Club" },
];

const stats = [
  { value: "45+", label: "Brands Partnered" },
  { value: "94%", label: "Retention Rate" },
  { value: "24", label: "Sectors Served" },
  { value: "78%", label: "Long-term collabs" },
];

export default function Recognition() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-[#888888] text-[clamp(1rem,3vw,2.2rem)] font-condensed font-bold tracking-tight leading-tight max-w-4xl"
        >
          WE DIDN&apos;T CHASE THE RECOGNITION
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-black text-[clamp(1.5rem,4vw,3.5rem)] font-condensed font-bold tracking-tightest leading-none mt-1 mb-16"
        >
          THE WORK DID THAT FOR US
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-[#FF3333] p-10 flex flex-col justify-center min-h-[250px]"
          >
            <p className="text-white/60 text-xs uppercase tracking-[0.2em] mb-3">Award</p>
            <h3 className="text-white text-4xl font-condensed font-bold tracking-tight">
              The One&reg; Award
            </h3>
            <p className="text-white/70 text-sm mt-2 max-w-xs">
              Recognized for outstanding creative excellence in brand design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="border border-[#E5E5E5] divide-y divide-[#E5E5E5]"
          >
            {awards.map((a, i) => (
              <div key={i} className="flex items-center justify-between px-8 py-6">
                <span className="text-black font-bold text-lg">{a.name}</span>
                <span className="text-[#888888] text-sm">{a.category}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-black font-semibold text-sm uppercase tracking-widest mb-8 max-w-md">
            We take on fewer projects. We pour everything into them.
          </p>
          <div className="flex flex-wrap">
            {stats.map((s, i) => (
              <div key={i} className="flex-1 min-w-[150px] flex">
                <div className={`flex-1 px-8 ${i < stats.length - 1 ? 'border-r border-[#FF3333]' : ''}`}>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-5xl font-condensed font-bold text-black block"
                  >
                    {s.value}
                  </motion.span>
                  <span className="text-[#888888] text-sm uppercase tracking-widest mt-2 block">
                    {s.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

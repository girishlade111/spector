"use client";

import { motion } from "framer-motion";

export default function CaseStudy() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-[#888888] text-xs uppercase tracking-[0.2em] font-semibold mb-3"
        >
          Client Story
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-black text-[clamp(1.5rem,4vw,3.5rem)] font-condensed font-bold tracking-tightest leading-none max-w-4xl mb-16"
        >
          WHEN THE WORK IS RIGHT THE NUMBERS FOLLOW
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-[#F5F5F5] p-10 flex flex-col"
          >
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#888888] mb-2">Case Study</p>
            <h3 className="text-3xl font-condensed font-bold tracking-tight text-black mb-8">
              The Human Interface
            </h3>
            <div
              className="w-full aspect-[16/9] bg-cover bg-center mb-8"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop)",
              }}
            />
            <div className="grid grid-cols-3 gap-4 mt-auto">
              {[
                { value: "6 wks", label: "Delivery" },
                { value: "2.7%", label: "Bounce Rate" },
                { value: "38%", label: "Conversion Lift" },
              ].map((m, i) => (
                <div key={i}>
                  <p className="text-2xl font-condensed font-bold text-black">{m.value}</p>
                  <p className="text-[#888888] text-xs uppercase tracking-widest mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#0A0A0A] p-10 flex flex-col justify-center"
          >
            <svg width="40" height="32" viewBox="0 0 40 32" fill="none" className="mb-6">
              <path d="M11.5 0C5.14 0 0 5.14 0 11.5V28C0 30.2 1.8 32 4 32H16C18.2 32 20 30.2 20 28V16C20 13.8 18.2 12 16 12H8C8 7.6 11.6 4 16 4H18C20.2 4 22 2.2 22 0H11.5Z" fill="#FF3333"/>
              <path d="M29.5 0C23.14 0 18 5.14 18 11.5V28C18 30.2 19.8 32 22 32H34C36.2 32 38 30.2 38 28V16C38 13.8 36.2 12 34 12H26C26 7.6 29.6 4 34 4H36C38.2 4 40 2.2 40 0H29.5Z" fill="#FF3333"/>
            </svg>
            <blockquote className="text-white text-xl font-condensed font-bold tracking-tight leading-[1.2] mb-6">
              &ldquo;Spector didn&apos;t just redesign our platform. They reimagined how our users experience healthcare. The results speak for themselves.&rdquo;
            </blockquote>
            <p className="text-white font-bold">Dr. Sarah Chen</p>
            <p className="text-white/40 text-sm">VP of Product, MediSync</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

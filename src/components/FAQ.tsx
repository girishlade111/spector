"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    q: "How does collaboration work?",
    a: "We start with a kickoff call to align on goals, followed by a discovery phase. Throughout the project, we maintain a shared workspace with regular updates and feedback loops.",
  },
  {
    q: "Who will work with me day to day?",
    a: "You will work directly with our senior team — the same people you meet in the proposal. We don't hand off projects to junior staff after the sale.",
  },
  {
    q: "What is the typical timeline for a project?",
    a: "Most projects run 4-8 weeks depending on scope. We provide a detailed timeline during the proposal phase so there are no surprises.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We work across technology, healthcare, finance, consumer brands, and professional services. Our approach adapts to each industry's unique challenges.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. Every project includes a post-launch support period. We also offer retainer-based partnerships for ongoing strategy, maintenance, and evolution.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
          FAQ
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-black text-[clamp(1.5rem,4vw,3rem)] font-condensed font-bold tracking-tightest leading-none mb-16 max-w-3xl"
        >
          WHAT YOU NEED TO KNOW BEFORE WE START
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="w-full aspect-[3/4] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white text-lg font-bold">Have queries? Need help?</p>
              <p className="text-white/60 text-sm mt-1">
                We&apos;re here to answer any questions you may have.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="divide-y divide-[#E5E5E5]">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <span className="text-black font-semibold text-sm pr-4 group-hover:text-[#FF3333] transition-colors">
                      {faq.q}
                    </span>
                    <span className="shrink-0">
                      {openIndex === i ? (
                        <X size={16} className="text-black" />
                      ) : (
                        <Plus size={16} className="text-black/40 group-hover:text-black transition-colors" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-[#888888] text-sm pb-5 leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

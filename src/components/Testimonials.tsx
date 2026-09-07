"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-[#0A0A0A] py-28">
      <div className="max-w-container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-[#888888] text-xs uppercase tracking-[0.2em] font-semibold mb-4"
        >
          What Clients Say
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-[#FF3333] mb-6">
              <Quote size={48} strokeWidth={1.5} />
            </div>
            <blockquote className="text-white text-2xl md:text-3xl font-condensed font-bold tracking-tight leading-[1.15]">
              &ldquo;They brought clarity to both the work and the process. Every detail was intentional, every interaction seamless. That&apos;s rare to find.&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="text-white font-bold text-lg">Clara Wendrich</p>
              <p className="text-white/40 text-sm">CMO, Renovatio Group</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="w-full aspect-[3/4] bg-cover bg-center grayscale"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop)",
              }}
            />
            <div className="absolute inset-0 ring-1 ring-white/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const rightTags = ["Brand", "Product", "Web", "Motion"];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] bg-[#0A0A0A] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1563207153-f403bf289096?q=80&w=2071&auto=format&fit=crop)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/70 to-[#0A0A0A]/95" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

      <div className="relative z-10 h-full max-w-container mx-auto px-6 flex flex-col justify-center pb-20">
        <div className="flex justify-between items-start mb-auto pt-28">
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-xs uppercase tracking-[0.2em]"
          >
            Design Agency
          </motion.p>

          <motion.ul
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:block text-right"
          >
            {rightTags.map((tag) => (
              <li key={tag} className="text-white/50 text-sm uppercase tracking-widest leading-7">
                {tag}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[clamp(2.5rem,10vw,7rem)] font-condensed font-bold leading-[0.85] tracking-tightest max-w-5xl -mt-10"
        >
          <span className="text-[#FF3333]">OUR BRANDS +</span>
          <br />
          <span className="text-white">JUST REFUSE</span>
          <br />
          <span className="text-white">TO BLEND IN</span>
        </motion.h1>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Nan Fujiwara",
    role: "Founder",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
  },
  {
    name: "Emily Erickson",
    role: "Head of Projects",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
  },
  {
    name: "Dieter Hertz",
    role: "Creative Director",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
  },
];

export default function Team() {
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
          The Team
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-black text-[clamp(1.5rem,4vw,3.5rem)] font-condensed font-bold tracking-tightest leading-none mb-6 max-w-4xl"
        >
          PEOPLE YOU MEET ARE THE ONES DOING THE WORK
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[#888888] text-sm max-w-xl mb-16"
        >
          We&apos;re a close-knit group of creative professionals passionate about building brands that matter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="w-full aspect-[2/1] bg-cover bg-center mb-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop)",
          }}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className="aspect-[3/4] bg-cover bg-center mb-4"
                style={{ backgroundImage: `url(${t.img})` }}
              />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-black font-bold text-lg">{t.name}</p>
                  <p className="text-[#888888] text-sm">{t.role}</p>
                </div>
                <div className="flex items-center gap-2">
                  <a href="#" aria-label={`${t.name} on X`} className="text-black/30 hover:text-black transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a href="#" aria-label={`${t.name} on LinkedIn`} className="text-black/30 hover:text-black transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

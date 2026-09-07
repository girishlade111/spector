"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Focus",
    price: "$2,799",
    period: "/project",
    desc: "For startups and small teams needing a sharp, focused brand presence.",
    accent: "#2563EB",
    features: [
      "Brand strategy & positioning",
      "Visual identity system",
      "5-page web design",
      "3 revision rounds",
      "Source files delivered",
    ],
    cta: "Start Project",
  },
  {
    name: "Advanced",
    price: "$5,199",
    period: "/project",
    desc: "For growing companies ready to elevate every touchpoint.",
    accent: "#FF3333",
    features: [
      "Everything in Focus, plus:",
      "Full brand guidelines",
      "12-page web design + build",
      "Motion assets (2 videos)",
      "Unlimited revisions",
      "Priority support",
    ],
    cta: "Start Project",
    featured: true,
  },
  {
    name: "Signature",
    price: "$7,999",
    period: "/project",
    desc: "For established brands that demand a comprehensive, high-touch partnership.",
    accent: "#0A0A0A",
    features: [
      "Everything in Advanced, plus:",
      "Research & discovery phase",
      "Unlimited page web design + build",
      "Custom illustration & iconography",
      "Motion assets (4 videos)",
      "Dedicated project manager",
      "12 months hosting & support",
    ],
    cta: "Contact Us",
  },
];

export default function Pricing() {
  return (
    <section className="bg-[#F5F5F5] py-28">
      <div className="max-w-container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-black text-[clamp(1.5rem,4vw,3.5rem)] font-condensed font-bold tracking-tightest leading-none text-center max-w-4xl mx-auto mb-16"
        >
          THE RIGHT BUDGET BUILDS THE RIGHT WORK AND ATTENTION
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white p-8 flex flex-col ${plan.featured ? "ring-2 ring-[#FF3333] relative -mt-4 md:-mt-6" : ""}`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF3333] text-white text-xs uppercase tracking-widest font-semibold px-4 py-1">
                  Most Popular
                </span>
              )}
              <p className="text-xs uppercase tracking-[0.2em] font-semibold">{plan.name}</p>
              <div className="mt-4 mb-2">
                <span className="text-5xl font-condensed font-bold tracking-tight">{plan.price}</span>
                <span className="text-[#888888] text-sm ml-1">{plan.period}</span>
              </div>
              <p className="text-[#888888] text-sm mb-8">{plan.desc}</p>
              <ul className="space-y-3 flex-1 mb-10">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-black">
                    <Check size={16} className="mt-0.5 shrink-0" style={{ color: plan.accent }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-3 text-sm uppercase tracking-widest font-semibold text-white transition-colors hover:opacity-90"
                style={{ backgroundColor: plan.accent }}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

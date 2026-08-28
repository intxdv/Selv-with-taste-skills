"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconCrosshair, IconSparkle } from "../ui/Icons";

export function ManifestoSection() {
  const axioms = [
    {
      num: "01",
      title: "TASTE IS NON-NEGOTIABLE",
      desc: "Algorithms propose; human art direction decides. Without impeccable taste, artificial intelligence produces infinite mediocrity.",
    },
    {
      num: "02",
      title: "SPEED WITHOUT REFINEMENT IS NOISE",
      desc: "We do not use machine intelligence to cut corners. We use it to explore 10,000 possibilities so the 1 we build is undeniable.",
    },
    {
      num: "03",
      title: "LIVING SYSTEMS SURPASS STATIC ASSETS",
      desc: "Brands are no longer rigid PDF guidelines. They are dynamic codebases, generative shaders, and autonomous sentient systems.",
    },
  ];

  return (
    <section
      id="manifesto"
      className="relative py-32 sm:py-44 px-6 sm:px-12 bg-[#0D0D10] border-t border-[#F4F3EE]/08 overflow-hidden select-none"
    >
      {/* Background Typography Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black text-[18vw] text-[#F4F3EE]/[0.015] pointer-events-none whitespace-nowrap leading-none select-none">
        PHILOSOPHY
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#D4FF3F] mb-12">
          <IconCrosshair size={14} />
          <span>// 05. CORE MANIFESTO & ETHOS</span>
        </div>

        {/* Hero Quote Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="max-w-5xl space-y-8"
        >
          <div className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-[#F4F3EE]">
            “WE DO NOT AUTOMATE CREATIVITY. WE{" "}
            <span className="text-[#D4FF3F]">AMPLIFY INTELLECT</span> TO UNLOCK VISUAL TERRITORIES PREVIOUSLY{" "}
            <span className="text-stroke">UNREACHABLE</span> BY EITHER ALONE.”
          </div>

          <div className="flex items-center space-x-4 pt-4">
            <span className="w-12 h-[1px] bg-[#D4FF3F]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#8E8E93]">
              SELV. FOUNDING CHARTER // 2026
            </span>
          </div>
        </motion.div>

        {/* Studio Axioms / Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-24 border-t border-[#F4F3EE]/08 mt-24">
          {axioms.map((ax, i) => (
            <motion.div
              key={ax.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-[#111114] border border-[#F4F3EE]/05 hover:border-[#D4FF3F]/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between pb-6 border-b border-[#F4F3EE]/05 text-xs font-mono">
                <span className="text-[#D4FF3F] font-bold">AXIOM // {ax.num}</span>
                <IconSparkle size={14} className="text-[#545458] group-hover:text-[#D4FF3F] transition-colors" />
              </div>

              <h4 className="font-display font-black text-xl text-[#F4F3EE] group-hover:text-[#D4FF3F] transition-colors pt-6 mb-3">
                {ax.title}
              </h4>

              <p className="text-sm text-[#8E8E93] font-light leading-relaxed">
                {ax.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

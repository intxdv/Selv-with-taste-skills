"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { IconCrosshair, IconSparkle, IconArrowRight } from "../ui/Icons";

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  const phases = [
    {
      step: "01",
      code: "PHASE.01 // DISCOVERY",
      title: "Latent Exploration & Embedding",
      duration: "WEEK 01 — 02",
      description:
        "We map your brand's philosophy and market position into multi-dimensional latent vectors. Our proprietary models generate 10,000+ seed iterations, exploring unchartered aesthetic frontiers beyond conventional human bias.",
      deliverables: ["Latent Space Map", "Aesthetic Seed Clusters", "Visual DNA Hypothesis"],
    },
    {
      step: "02",
      code: "PHASE.02 // CURATION",
      title: "Algorithmic Synthesis & Curation",
      duration: "WEEK 03 — 04",
      description:
        "Human art direction takes command. We apply Swiss typographic grids, mathematical harmony, and strict optical refinements to filter raw generative power into an immaculate, iconic brand identity.",
      deliverables: ["Core Brand Architecture", "Dynamic Typographic Hierarchy", "Design Language Guidelines"],
    },
    {
      step: "03",
      code: "PHASE.03 // ARCHITECTURE",
      title: "Generative System Calibration",
      duration: "WEEK 05 — 06",
      description:
        "We translate visual identities into live generative code. We write custom WebGL shaders, headless design token engines, and autonomous multi-platform component pipelines ready for immediate scaling.",
      deliverables: ["Token Pipeline Engine", "Custom WebGL / GLSL Shaders", "Interactive Component Matrix"],
    },
    {
      step: "04",
      code: "PHASE.04 // DEPLOYMENT",
      title: "Deployment & Living Evolution",
      duration: "WEEK 07+",
      description:
        "We deploy hyper-optimized digital experiences engineered for 60fps fluid motion, sub-100ms response times, and ongoing real-time procedural adaptations as your brand scales globally.",
      deliverables: ["Production Web Platform", "Autonomous Asset Pipelines", "Real-Time Telemetry & QA"],
    },
  ];

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative py-28 sm:py-36 px-6 sm:px-12 bg-[#0A0A0B] border-t border-[#F4F3EE]/08 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-20 border-b border-[#F4F3EE]/08 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#D4FF3F] mb-3">
              <IconCrosshair size={14} />
              <span>// 04. METHODOLOGY & TIMELINE</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-[#F4F3EE] tracking-tight">
              THE <span className="text-[#D4FF3F]">SYNTHESIS</span> PROTOCOL
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-light text-[#8E8E93] leading-relaxed">
            Our four-phase protocol eliminates guesswork, pairing machine-speed experimentation with elite human curation.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pt-16">
          {/* Vertical Central Spine Progress Bar (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-16 bottom-16 w-[1px] -translate-x-1/2 bg-[#F4F3EE]/10">
            <motion.div
              className="w-full bg-[#D4FF3F] origin-top shadow-[0_0_12px_#D4FF3F]"
              style={{ scaleY, height: "100%" }}
            />
          </div>

          {/* Timeline Phase Steps */}
          <div className="space-y-16 lg:space-y-24">
            {phases.map((phase, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={phase.step} className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column (Content on even, Spacer/Badge on odd) */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "lg:text-right" : "lg:order-last lg:text-left"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                      className="p-8 sm:p-10 rounded-2xl bg-[#111114] border border-[#F4F3EE]/08 hover:border-[#D4FF3F]/40 transition-all duration-500 group"
                    >
                      {/* Step Header */}
                      <div
                        className={`flex items-center space-x-3 text-xs font-mono mb-4 ${
                          isEven ? "lg:justify-end" : "lg:justify-start"
                        }`}
                      >
                        <span className="text-[#D4FF3F] font-bold">{phase.step}</span>
                        <span className="text-[#545458]">//</span>
                        <span className="text-[#8E8E93]">{phase.code}</span>
                      </div>

                      <h3 className="font-display font-black text-2xl sm:text-3xl text-[#F4F3EE] group-hover:text-[#D4FF3F] transition-colors duration-300 mb-3">
                        {phase.title}
                      </h3>

                      <p className="text-sm text-[#8E8E93] font-light leading-relaxed mb-6">
                        {phase.description}
                      </p>

                      {/* Deliverables List */}
                      <div className="pt-4 border-t border-[#F4F3EE]/05 space-y-2">
                        <div
                          className={`text-[10px] font-mono uppercase tracking-widest text-[#545458] mb-2 ${
                            isEven ? "lg:text-right" : "lg:text-left"
                          }`}
                        >
                          KEY ARTEFACTS:
                        </div>
                        <div
                          className={`flex flex-wrap gap-2 ${
                            isEven ? "lg:justify-end" : "lg:justify-start"
                          }`}
                        >
                          {phase.deliverables.map((del) => (
                            <span
                              key={del}
                              className="px-2.5 py-1 rounded bg-[#18181D] text-[11px] font-mono text-[#8E8E93] border border-[#F4F3EE]/05"
                            >
                              {del}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Node Indicator */}
                  <div className="hidden lg:flex lg:col-span-2 items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#111114] border border-[#F4F3EE]/20 flex items-center justify-center text-xs font-mono text-[#D4FF3F] font-bold z-10 shadow-xl group-hover:border-[#D4FF3F] transition-colors">
                      <IconSparkle size={16} />
                    </div>
                  </div>

                  {/* Right Column (Timeframe card on even, Empty spacer on odd) */}
                  <div
                    className={`hidden lg:flex lg:col-span-5 items-center ${
                      isEven ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div className="px-6 py-3 rounded-full bg-[#141418] border border-[#F4F3EE]/08 font-mono text-xs text-[#8E8E93] flex items-center space-x-3">
                      <span className="w-2 h-2 rounded-full bg-[#D4FF3F]" />
                      <span>TIMEFRAME: {phase.duration}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

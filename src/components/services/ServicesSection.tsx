"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IconNeuralIdentity,
  IconGenerativeSystem,
  IconMotionInteractive,
  IconProductSynthesis,
  IconArrowUpRight,
  IconCrosshair,
} from "../ui/Icons";

export function ServicesSection() {
  const services = [
    {
      id: "01",
      code: "SRV.LATENT-ID",
      title: "AI Brand Identity",
      tagline: "Neural Visual DNA & Living Marks",
      desc: "We build living brand ecosystems trained on your brand's core ethos. Combining custom diffusion models with Swiss typographic precision to generate dynamic, contextual logo systems that evolve in real time.",
      icon: IconNeuralIdentity,
      capabilities: [
        "Latent Identity Genesis",
        "Procedural Vector Logo Systems",
        "Algorithmic Art Direction",
        "Generative Typography",
      ],
      offset: "lg:translate-y-0",
      accentGlow: "group-hover:border-[#D4FF3F]/40",
    },
    {
      id: "02",
      code: "SRV.GEN-SYSTEMS",
      title: "Generative Design Systems",
      tagline: "Algorithmic Multi-Modal Architecture",
      desc: "Scale beyond static UI kits. We architect generative token pipelines and autonomous component libraries that adapt dynamically across platforms, aspect ratios, and computational environments.",
      icon: IconGenerativeSystem,
      capabilities: [
        "Dynamic Token Pipelines",
        "Autonomous UI Engine",
        "Multi-Platform Synthesis",
        "Design-to-Code Automation",
      ],
      offset: "lg:translate-y-16",
      accentGlow: "group-hover:border-[#D4FF3F]/40",
    },
    {
      id: "03",
      code: "SRV.MOTION-GLSL",
      title: "Motion & Interactive",
      tagline: "Kinetic Shaders & Spatial Interfaces",
      desc: "Transform passive visitors into immersed participants. We write bespoke WebGL shaders, Three.js spatial environments, and GSAP scroll choreographies that react with silky 60fps fluidity.",
      icon: IconMotionInteractive,
      capabilities: [
        "Custom WebGL/GLSL Shaders",
        "GSAP Scroll Orchestration",
        "Spatial 3D Environments",
        "Physics-Driven Micro-Interactions",
      ],
      offset: "lg:-translate-y-8",
      accentGlow: "group-hover:border-[#D4FF3F]/40",
    },
    {
      id: "04",
      code: "SRV.PRODUCT-AI",
      title: "AI-Assisted Product Design",
      tagline: "Predictive & Contextual Software",
      desc: "Design digital products that anticipate intent. We craft next-generation SaaS architectures and AI-native workflows that feel intuitive, elegant, and impossibly fast.",
      icon: IconProductSynthesis,
      capabilities: [
        "AI-Native UX Architecture",
        "Predictive Interfaces",
        "High-Fidelity Interactive Prototypes",
        "Contextual Intelligence Flows",
      ],
      offset: "lg:translate-y-8",
      accentGlow: "group-hover:border-[#D4FF3F]/40",
    },
  ];

  return (
    <section id="services" className="relative py-28 sm:py-36 px-6 sm:px-12 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-[#F4F3EE]/08 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#D4FF3F] mb-3">
              <IconCrosshair size={14} />
              <span>// 02. CAPABILITIES & SERVICES</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-[#F4F3EE] tracking-tight">
              PRECISION <span className="text-stroke">CAPABILITIES</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-light text-[#8E8E93] leading-relaxed">
            Four specialized disciplines converging human taste and machine speed to deliver peerless aesthetic dominance.
          </p>
        </div>

        {/* Staggered Offset Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-16">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
                className={`relative group rounded-2xl bg-[#111114] border border-[#F4F3EE]/08 p-8 sm:p-12 transition-all duration-500 hover:bg-[#141418] ${srv.offset} ${srv.accentGlow}`}
                data-cursor="explore"
                data-cursor-text="SRV"
              >
                {/* Vertex Highlight Indicator */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 right-0 w-2 h-2 bg-[#D4FF3F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Top Meta Bar */}
                <div className="flex items-center justify-between pb-8 border-b border-[#F4F3EE]/05">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-xs text-[#D4FF3F] font-bold">
                      {srv.id}
                    </span>
                    <span className="text-[#545458] font-mono text-xs">//</span>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#8E8E93]">
                      {srv.code}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#18181D] border border-[#F4F3EE]/08 flex items-center justify-center text-[#F4F3EE] group-hover:border-[#D4FF3F] group-hover:text-[#D4FF3F] group-hover:scale-110 transition-all duration-300">
                    <Icon size={20} />
                  </div>
                </div>

                {/* Service Core Content */}
                <div className="py-8 space-y-4">
                  <span className="block font-mono text-xs text-[#D4FF3F] uppercase tracking-wider">
                    {srv.tagline}
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-4xl text-[#F4F3EE] group-hover:text-[#D4FF3F] transition-colors duration-300">
                    {srv.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#8E8E93] font-light leading-relaxed pt-2">
                    {srv.desc}
                  </p>
                </div>

                {/* Capabilities Pills & Action */}
                <div className="pt-6 border-t border-[#F4F3EE]/05 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {srv.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-3 py-1 rounded-md bg-[#18181D] text-[11px] font-mono text-[#8E8E93] group-hover:text-[#F4F3EE] group-hover:bg-[#1E1E24] transition-colors"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[#18181D] flex items-center justify-center text-[#8E8E93] group-hover:bg-[#D4FF3F] group-hover:text-[#0A0A0B] transition-all duration-300 ml-auto">
                    <IconArrowUpRight size={16} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

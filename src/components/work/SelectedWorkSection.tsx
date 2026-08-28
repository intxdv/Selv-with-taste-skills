"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconArrowUpRight, IconSparkle, IconCrosshair } from "../ui/Icons";

interface Project {
  id: string;
  client: string;
  title: string;
  category: string;
  year: string;
  description: string;
  impact: string;
  gradient: string;
  accentColor: string;
  tags: string[];
}

export function SelectedWorkSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: "01",
      client: "KAIROS QUANTUM",
      title: "Autonomous Neural Brand Identity & WebGL Platform",
      category: "AI Identity / Spatial Web",
      year: "2026",
      description:
        "Engineered a dynamic, generative visual DNA that morphs according to real-time quantum compute loads. Accompanied by a bespoke WebGL documentation canvas.",
      impact: "+340% Ecosystem Adoption // 60 FPS Fluid Shaders",
      gradient:
        "radial-gradient(circle at 30% 30%, rgba(212, 255, 63, 0.4) 0%, rgba(61, 90, 254, 0.3) 40%, rgba(10, 10, 11, 0.95) 80%), linear-gradient(135deg, #181824 0%, #0A0A0B 100%)",
      accentColor: "#D4FF3F",
      tags: ["Latent Diffusion", "Three.js", "Generative Typography"],
    },
    {
      id: "02",
      client: "AETHER SPATIAL",
      title: "Procedural Operating System & Design Architecture",
      category: "Generative Systems / OS",
      year: "2025",
      description:
        "Designed an algorithmic multi-platform token engine for a spatial computing OS, powering 1,400+ procedural components across vision and mobile devices.",
      impact: "1,400+ Dynamic Tokens // Sub-16ms Token Interpolation",
      gradient:
        "radial-gradient(circle at 70% 40%, rgba(212, 255, 63, 0.35) 0%, rgba(0, 230, 118, 0.25) 45%, rgba(10, 10, 11, 0.95) 85%), linear-gradient(135deg, #121815 0%, #0A0A0B 100%)",
      accentColor: "#D4FF3F",
      tags: ["Design Tokens", "Spatial UX", "Autonomous CI/CD"],
    },
    {
      id: "03",
      client: "OBLIVION AUDIO",
      title: "Kinetic Algorithmic Audio Synthesizer & Flagship",
      category: "Interactive / Motion / Audio",
      year: "2025",
      description:
        "Crafted a tactile, browser-native audiovisual synthesizer exploring generative sound topologies, paired with an editorial quiet-luxury e-commerce flagship.",
      impact: "Awwwards Site of the Year Finalist // 120k Live Users",
      gradient:
        "radial-gradient(circle at 40% 70%, rgba(212, 255, 63, 0.3) 0%, rgba(255, 110, 64, 0.2) 50%, rgba(10, 10, 11, 0.95) 85%), linear-gradient(135deg, #1C1814 0%, #0A0A0B 100%)",
      accentColor: "#D4FF3F",
      tags: ["Web Audio API", "GLSL Shaders", "GSAP Scroll"],
    },
    {
      id: "04",
      client: "SOLARIS AEROSPACE",
      title: "Autonomous Mission Control & Telemetry Interface",
      category: "AI Product / Telemetry UX",
      year: "2024",
      description:
        "Redesigned the mission telemetry deck for orbital satellites, synthesizing gigabytes of real-time stream data into high-contrast, zero-cognitive-overload UI.",
      impact: "99.999% Operational Accuracy // Zero-Lag Visualization",
      gradient:
        "radial-gradient(circle at 60% 30%, rgba(212, 255, 63, 0.3) 0%, rgba(0, 184, 212, 0.25) 45%, rgba(10, 10, 11, 0.95) 85%), linear-gradient(135deg, #101820 0%, #0A0A0B 100%)",
      accentColor: "#D4FF3F",
      tags: ["Telemetry Systems", "Mission Control", "Dark UI"],
    },
  ];

  return (
    <section id="work" className="relative py-28 sm:py-36 px-6 sm:px-12 bg-[#0A0A0B] border-t border-[#F4F3EE]/08">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-[#F4F3EE]/08 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#D4FF3F] mb-3">
              <IconCrosshair size={14} />
              <span>// 03. SELECTED ARTEFACTS</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-[#F4F3EE] tracking-tight">
              SELECTED <span className="text-stroke">WORKS</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#8E8E93] max-w-sm space-y-1">
            <div>ARCHIVE 2024 — 2026</div>
            <div className="text-[#545458]">EVERY PROJECT REPRESENTS BESPOKE GENERATIVE CODE × ELEVATED CRAFT</div>
          </div>
        </div>

        {/* Projects Showcase Stack */}
        <div className="space-y-16 pt-16">
          {projects.map((project, index) => {
            const isHovered = activeProject === index;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
                className="group relative rounded-3xl bg-[#111114] border border-[#F4F3EE]/08 hover:border-[#D4FF3F]/40 p-6 sm:p-10 lg:p-14 transition-all duration-700 overflow-hidden"
                data-cursor="view"
                data-cursor-text="VIEW"
              >
                {/* Background Ambient Glow */}
                <div
                  className="absolute -inset-24 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none blur-3xl"
                  style={{ background: project.gradient }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  {/* Left Column: Information & Metrics */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-center space-x-3 text-xs font-mono">
                      <span className="text-[#D4FF3F] font-bold">[{project.id}]</span>
                      <span className="text-[#545458]">//</span>
                      <span className="text-[#8E8E93] uppercase tracking-widest">{project.client}</span>
                      <span className="text-[#545458]">•</span>
                      <span className="text-[#545458]">{project.year}</span>
                    </div>

                    <h3 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-[#F4F3EE] group-hover:text-[#D4FF3F] transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#8E8E93] font-light leading-relaxed">
                      {project.description}
                    </p>

                    {/* Impact Metric Bar */}
                    <div className="p-4 rounded-xl bg-[#18181D] border border-[#F4F3EE]/05 flex items-center space-x-3">
                      <IconSparkle size={16} className="text-[#D4FF3F] shrink-0" />
                      <span className="font-mono text-xs text-[#F4F3EE] font-medium tracking-wide">
                        {project.impact}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-md bg-[#16161A] text-[11px] font-mono text-[#8E8E93] border border-[#F4F3EE]/05"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Abstract Generative Gradient Canvas Simulation */}
                  <div className="lg:col-span-6">
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#F4F3EE]/10 group-hover:border-[#D4FF3F]/50 transition-all duration-500 shadow-2xl">
                      {/* Generative Visual Layer */}
                      <div
                        className="w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-105"
                        style={{
                          background: project.gradient,
                        }}
                      >
                        {/* Procedural Grid Lines Overlay */}
                        <div className="absolute inset-0 grid-lines opacity-60 mix-blend-overlay" />

                        {/* Visual Reticle & Typography */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-between text-xs font-mono text-[#F4F3EE]/60">
                          <div className="flex items-center justify-between">
                            <span className="bg-[#0A0A0B]/60 px-2.5 py-1 rounded backdrop-blur-md border border-[#F4F3EE]/10 text-[10px]">
                              {project.category}
                            </span>
                            <span className="text-[#D4FF3F] font-bold">● LIVE</span>
                          </div>

                          <div className="flex items-end justify-between">
                            <div className="text-[10px] space-y-0.5 font-mono">
                              <div>RENDER: REALTIME LATENT</div>
                              <div className="text-[#8E8E93]">FPS: 60 // SHADER: GLSL</div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-[#0A0A0B]/80 backdrop-blur-md border border-[#F4F3EE]/20 flex items-center justify-center text-[#F4F3EE] group-hover:bg-[#D4FF3F] group-hover:text-[#0A0A0B] group-hover:border-[#D4FF3F] transition-all duration-300">
                              <IconArrowUpRight size={18} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

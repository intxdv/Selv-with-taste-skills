"use client";

import React from "react";
import { IconSparkle, IconCrosshair } from "../ui/Icons";

export function TickerSection() {
  const clients = [
    "AETHER PROTOCOL",
    "KAIROS QUANTUM",
    "SYNAPSE BIO-LABS",
    "SOLARIS SPATIAL",
    "OBLIVION ACOUSTICS",
    "CHRONOS AEROSPACE",
    "HYPERION ROBOTICS",
    "VORTEX CAPITAL",
    "NEBULA ARCHITECTURE",
  ];

  const keywords = [
    "LATENT DIFFUSION PIPELINES",
    "PROCEDURAL BRAND IDENTITY",
    "GENERATIVE DESIGN SYSTEMS",
    "NEURAL SHADER TOPOLOGY",
    "REAL-TIME SPATIAL 3D",
    "BIOMIMETIC ALGORITHMS",
    "ADAPTIVE DESIGN TOKENS",
    "KINETIC EDITORIAL CRAFT",
  ];

  return (
    <section className="relative py-12 border-y border-[#F4F3EE]/08 bg-[#0D0D0F] overflow-hidden select-none">
      {/* Subtle edge vignette fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#0A0A0B] to-transparent z-10 pointer-events-none" />

      {/* Row 1: Client & Partner Network (Left to Right) */}
      <div className="flex overflow-hidden whitespace-nowrap py-3">
        <div className="flex items-center space-x-12 animate-marquee-slow hover:[animation-play-state:paused]">
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <div key={`client-${idx}`} className="flex items-center space-x-8 group">
              <span className="font-display font-bold text-xl sm:text-2xl tracking-widest text-[#545458] group-hover:text-[#F4F3EE] transition-colors duration-300">
                {client}
              </span>
              <IconSparkle size={14} className="text-[#D4FF3F]/40 group-hover:text-[#D4FF3F] transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Capabilities & AI Paradigms (Right to Left) */}
      <div className="flex overflow-hidden whitespace-nowrap py-3 border-t border-[#F4F3EE]/05">
        <div
          className="flex items-center space-x-12 hover:[animation-play-state:paused]"
          style={{
            animation: "marquee 30s linear infinite reverse",
          }}
        >
          {[...keywords, ...keywords, ...keywords].map((keyword, idx) => (
            <div key={`kw-${idx}`} className="flex items-center space-x-8 group">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#8E8E93] group-hover:text-[#D4FF3F] transition-colors duration-300">
                {keyword}
              </span>
              <IconCrosshair size={12} className="text-[#D4FF3F]/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

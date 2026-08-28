"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hero3DCanvas } from "./Hero3DCanvas";
import { IconArrowDown, IconSparkle, IconCrosshair } from "../ui/Icons";

export function HeroSection() {
  const headlineWords1 = ["SYNTHESIZING"];
  const headlineWords2 = ["INTELLIGENCE", "&"];
  const headlineWords3 = ["RADICAL", "CRAFT"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 60, opacity: 0, rotateX: 30 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-16 px-6 sm:px-12 overflow-hidden">
      {/* 3D Generative Canvas Background */}
      <Hero3DCanvas />

      {/* Decorative Grid Lines & Coordinate Overlay */}
      <div className="absolute inset-0 pointer-events-none grid-lines opacity-40" />

      {/* Top Meta Header */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-widest text-[#8E8E93] border-b border-[#F4F3EE]/08 pb-6">
        <div className="flex items-center space-x-3">
          <IconCrosshair size={14} className="text-[#D4FF3F]" />
          <span>SYS.LATENT // 001</span>
          <span className="text-[#545458]">•</span>
          <span className="text-[#F4F3EE]">AI CREATIVE ARCHITECTURE</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF3F]" />
            <span>MODEL: SELV-SYNTH-V4</span>
          </div>
          <span className="hidden sm:inline text-[#545458]">//</span>
          <span className="hidden sm:inline">GLOBAL ATELIER</span>
        </div>
      </div>

      {/* Main Massive Editorial Typography Hero */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-2 sm:space-y-3"
        >
          {/* Row 1 */}
          <div className="overflow-hidden py-1">
            <motion.div variants={wordVariants} className="flex flex-wrap items-center gap-x-4 sm:gap-x-6">
              <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.5vw] xl:text-[5.6rem] tracking-tight leading-[0.95] text-[#F4F3EE]">
                SYNTHESIZING
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#D4FF3F]/10 border border-[#D4FF3F]/30 text-[#D4FF3F] text-xs font-mono">
                <IconSparkle size={12} />
                <span>GEN-AI ATELIER</span>
              </span>
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden py-1">
            <motion.div variants={wordVariants} className="flex flex-wrap items-baseline gap-x-4 sm:gap-x-6">
              <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.5vw] xl:text-[5.6rem] tracking-tight leading-[0.95] text-stroke">
                MACHINE
              </span>
              <span className="font-display font-bold italic text-4xl sm:text-6xl md:text-7xl lg:text-[5.5vw] xl:text-[5.6rem] tracking-tight leading-[0.95] text-[#D4FF3F]">
                MIND
              </span>
            </motion.div>
          </div>

          {/* Row 3 */}
          <div className="overflow-hidden py-1">
            <motion.div variants={wordVariants} className="flex flex-wrap items-baseline gap-x-4 sm:gap-x-6">
              <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.5vw] xl:text-[5.6rem] tracking-tight leading-[0.95] text-[#F4F3EE]">
                WITH RADICAL CRAFT
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Subtitle and Action Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
        >
          <div className="lg:col-span-6">
            <p className="text-base sm:text-lg text-[#8E8E93] font-light leading-relaxed">
              <strong className="text-[#F4F3EE] font-medium">Selv.</strong> merges deep neural architectures with world-class art direction. We build bespoke visual identities, autonomous design systems, and cinematic digital products for leaders sculpting tomorrow.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-wrap items-center justify-start lg:justify-end gap-4">
            <a
              href="#work"
              className="relative inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#D4FF3F] text-[#0A0A0B] font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#E2FF66] transition-all duration-300 shadow-[0_0_30px_rgba(212,255,63,0.3)] hover:shadow-[0_0_45px_rgba(212,255,63,0.5)] group"
              data-cursor="pointer"
            >
              <span>Explore Selected Works</span>
              <IconArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-1" />
            </a>

            <a
              href="#manifesto"
              className="inline-flex items-center space-x-2 px-7 py-4 rounded-full bg-[#121215] border border-[#F4F3EE]/15 text-[#F4F3EE] font-mono text-xs uppercase tracking-widest font-semibold hover:border-[#D4FF3F] hover:text-[#D4FF3F] transition-all duration-300"
              data-cursor="pointer"
            >
              <span>Our Manifesto</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Floating Coordinates / Scroll Cue */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between pt-6 border-t border-[#F4F3EE]/08 text-[10px] font-mono text-[#545458]">
        <div className="flex items-center space-x-4">
          <span>LAT: 35.6762° N // LON: 139.6503° E</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">AUTONOMOUS CREATIVE ENGINE</span>
        </div>
        <div className="flex items-center space-x-2 text-[#8E8E93]">
          <span>SCROLL TO DISCOVER</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF3F] animate-bounce" />
        </div>
      </div>
    </section>
  );
}

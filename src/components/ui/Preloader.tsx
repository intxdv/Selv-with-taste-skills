"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoSelv } from "./Icons";

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [statusText, setStatusText] = useState("CALIBRATING NEURAL EMBEDDINGS...");

  useEffect(() => {
    const statuses = [
      "SYNCHRONIZING LATENT VECTORS...",
      "CALIBRATING NEURAL EMBEDDINGS...",
      "SAMPLING GENERATIVE TOPOLOGY...",
      "INITIALIZING REAL-TIME SHADERS...",
      "SELV. CORE // SYSTEM READY",
    ];

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 6) + 4;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        setStatusText("SELV. CORE // SYSTEM READY");
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          if (onComplete) onComplete();
        }, 300);
      } else {
        setProgress(current);
        const statusIdx = Math.min(
          Math.floor((current / 100) * statuses.length),
          statuses.length - 1
        );
        setStatusText(statuses[statusIdx]);
      }
    }, 35);

    // Failsafe auto-dismiss after 1.8s
    const timeout = setTimeout(() => {
      setProgress(100);
      setIsDone(true);
      if (onComplete) onComplete();
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []); // Run once on mount

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] flex flex-col justify-between bg-[#0A0A0B] p-6 sm:p-12 text-[#F4F3EE] select-none cursor-pointer"
          onClick={() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-[#8E8E93]">
            <div className="flex items-center space-x-3">
              <span className="inline-block w-2 h-2 rounded-full bg-[#D4FF3F] animate-ping" />
              <span className="text-[#F4F3EE] font-semibold">SELV. LABS</span>
              <span className="hidden sm:inline text-[#545458]">•</span>
              <span className="hidden sm:inline">AI CREATIVE ATELIER</span>
            </div>
            <div className="font-mono">VER 4.8 // 2026</div>
          </div>

          {/* Center Brand Identity */}
          <div className="flex flex-col items-center justify-center my-auto">
            <div className="relative mb-6">
              <LogoSelv size={64} className="text-[#F4F3EE]" />
              <div className="absolute -inset-4 rounded-full bg-[#D4FF3F]/10 blur-xl pointer-events-none" />
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-center text-[#F4F3EE]">
              SELV<span className="text-[#D4FF3F]">.</span>
            </h1>

            <p className="mt-3 text-xs sm:text-sm font-mono tracking-widest text-[#8E8E93] text-center">
              ARTIFICIAL INTELLIGENCE × BESPOKE DESIGN
            </p>
          </div>

          {/* Bottom Progress & Telemetry */}
          <div className="space-y-4">
            <div className="flex items-end justify-between font-mono">
              <div className="text-xs text-[#D4FF3F] tracking-wider truncate max-w-[260px] sm:max-w-md">
                {statusText}
              </div>
              <div className="text-3xl sm:text-5xl font-display font-black tracking-tight text-[#F4F3EE]">
                {String(progress).padStart(3, "0")}
                <span className="text-base text-[#D4FF3F] ml-1 font-mono">%</span>
              </div>
            </div>

            {/* Progress Bar Track */}
            <div className="relative h-[2px] w-full bg-[#18181D] overflow-hidden">
              <div
                className="h-full bg-[#D4FF3F] transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#545458]">
              <span>LATENT DIMENSIONS: 1536</span>
              <span>RENDER ENGINE: WEBGL2 / THREE</span>
              <span className="text-[#8E8E93]">CLICK ANYWHERE TO SKIP ↗</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

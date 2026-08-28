"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [cursorState, setCursorState] = useState<{
    text: string;
    variant: "default" | "pointer" | "view" | "explore" | "drag" | "hidden";
  }>({ text: "", variant: "default" });

  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.documentElement.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Global listener for interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorEl = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorEl) {
        const cursorType = cursorEl.getAttribute("data-cursor");
        const cursorText = cursorEl.getAttribute("data-cursor-text") || "";
        if (cursorType === "view") {
          setCursorState({ text: cursorText || "VIEW", variant: "view" });
          return;
        }
        if (cursorType === "explore") {
          setCursorState({ text: cursorText || "EXPLORE", variant: "explore" });
          return;
        }
        if (cursorType === "drag") {
          setCursorState({ text: cursorText || "DRAG", variant: "drag" });
          return;
        }
      }

      const interactive = target.closest("a, button, input, textarea, select, [role='button']");
      if (interactive) {
        setCursorState({ text: "", variant: "pointer" });
      } else {
        setCursorState({ text: "", variant: "default" });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleElementHover);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision inner center dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          width: cursorState.variant === "default" ? 6 : 4,
          height: cursorState.variant === "default" ? 6 : 4,
          backgroundColor: cursorState.variant === "view" || cursorState.variant === "explore" ? "#0A0A0B" : "#D4FF3F",
          opacity: cursorState.variant === "hidden" ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Fluid outer ring / badge */}
      <motion.div
        className="pointer-events-none fixed z-[9998] top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full font-mono text-[10px] font-bold uppercase tracking-widest"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          width:
            cursorState.variant === "view" || cursorState.variant === "explore" || cursorState.variant === "drag"
              ? 84
              : cursorState.variant === "pointer"
              ? 44
              : 28,
          height:
            cursorState.variant === "view" || cursorState.variant === "explore" || cursorState.variant === "drag"
              ? 84
              : cursorState.variant === "pointer"
              ? 44
              : 28,
          backgroundColor:
            cursorState.variant === "view" || cursorState.variant === "explore"
              ? "#D4FF3F"
              : cursorState.variant === "pointer"
              ? "rgba(212, 255, 63, 0.08)"
              : "rgba(244, 243, 238, 0.02)",
          borderColor:
            cursorState.variant === "view" || cursorState.variant === "explore"
              ? "#D4FF3F"
              : cursorState.variant === "pointer"
              ? "#D4FF3F"
              : "rgba(244, 243, 238, 0.25)",
          borderWidth: cursorState.variant === "view" || cursorState.variant === "explore" ? 0 : 1,
          color: cursorState.variant === "view" || cursorState.variant === "explore" ? "#0A0A0B" : "#F4F3EE",
          scale: cursorState.variant === "hidden" ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.6 }}
      >
        {cursorState.text && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="tracking-wider select-none font-extrabold"
          >
            {cursorState.text}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}

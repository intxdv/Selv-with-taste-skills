"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoSelv, IconArrowUpRight } from "./Icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Selected Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Manifesto", href: "#manifesto" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#0A0A0B]/80 backdrop-blur-xl border-b border-[#F4F3EE]/05 shadow-2xl"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#"
            className="flex items-center space-x-3 group cursor-pointer"
            data-cursor="pointer"
          >
            <LogoSelv size={32} className="text-[#F4F3EE] transition-transform duration-500 group-hover:rotate-3 group-hover:text-[#D4FF3F]" />
            <div className="flex flex-col">
              <span className="font-display font-black text-lg tracking-wider text-[#F4F3EE]">
                SELV<span className="text-[#D4FF3F]">.</span>
              </span>
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#8E8E93] group-hover:text-[#D4FF3F] transition-colors">
                AI × DESIGN
              </span>
            </div>
          </a>

          {/* Availability Status Badge (Desktop) */}
          <div className="hidden lg:flex items-center space-x-2 px-3 py-1 rounded-full bg-[#141417] border border-[#F4F3EE]/08 text-xs font-mono text-[#8E8E93]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF3F] animate-pulse" />
            <span className="text-[#F4F3EE]">AVAILABILITY:</span>
            <span className="text-[#D4FF3F]">ACCEPTING Q2/Q3</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-mono uppercase tracking-widest text-[#8E8E93]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 hover:text-[#F4F3EE] transition-colors duration-200 group"
                data-cursor="pointer"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4FF3F] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Action Button */}
          <div className="hidden sm:flex items-center">
            <a
              href="#contact"
              className="relative inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#F4F3EE] text-[#0A0A0B] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#D4FF3F] transition-all duration-300 group"
              data-cursor="pointer"
            >
              <span>Initiate Project</span>
              <IconArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5 p-2 focus:outline-none"
            aria-label="Toggle Navigation Menu"
            data-cursor="pointer"
          >
            <span
              className={`w-6 h-[1.5px] bg-[#F4F3EE] transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2 bg-[#D4FF3F]" : ""
              }`}
            />
            <span
              className={`w-4 h-[1.5px] bg-[#F4F3EE] transition-opacity duration-300 ml-auto ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[1.5px] bg-[#F4F3EE] transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2 bg-[#D4FF3F]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 pt-24 px-8 pb-12 bg-[#0A0A0B]/95 backdrop-blur-2xl md:hidden flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#545458]">
                // NAVIGATION
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-3xl font-bold text-[#F4F3EE] hover:text-[#D4FF3F] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="space-y-6 pt-8 border-t border-[#F4F3EE]/10">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#8E8E93]">
                <span className="w-2 h-2 rounded-full bg-[#D4FF3F] animate-ping" />
                <span>STUDIO ACTIVE IN TOKYO • BERLIN • SF</span>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 py-4 rounded-full bg-[#D4FF3F] text-[#0A0A0B] font-mono text-xs uppercase tracking-widest font-bold"
              >
                <span>Initiate Project</span>
                <IconArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

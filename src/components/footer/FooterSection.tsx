"use client";

import React, { useState, useEffect } from "react";
import {
  LogoSelv,
  IconX,
  IconInstagram,
  IconLinkedIn,
  IconBehance,
  IconTerminal,
  IconArrowDown,
  IconGeodesicGlobe,
} from "../ui/Icons";

export function FooterSection() {
  const [times, setTimes] = useState({
    sf: "--:--:--",
    berlin: "--:--:--",
    tokyo: "--:--:--",
    utc: "--:--:--",
  });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimes({
        sf: now.toLocaleTimeString("en-US", { timeZone: "America/Los_Angeles", hour12: false }),
        berlin: now.toLocaleTimeString("en-US", { timeZone: "Europe/Berlin", hour12: false }),
        tokyo: now.toLocaleTimeString("en-US", { timeZone: "Asia/Tokyo", hour12: false }),
        utc: now.toLocaleTimeString("en-US", { timeZone: "UTC", hour12: false }),
      });
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "X (Twitter)", icon: IconX, href: "https://x.com" },
    { name: "Instagram", icon: IconInstagram, href: "https://instagram.com" },
    { name: "LinkedIn", icon: IconLinkedIn, href: "https://linkedin.com" },
    { name: "Behance", icon: IconBehance, href: "https://behance.net" },
    { name: "Terminal", icon: IconTerminal, href: "#" },
  ];

  return (
    <footer className="relative bg-[#070708] border-t border-[#F4F3EE]/08 pt-20 pb-12 px-6 sm:px-12 text-[#F4F3EE] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* World Time Clocks Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-[#0D0D10] border border-[#F4F3EE]/05 font-mono">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#545458]">
              <IconGeodesicGlobe size={12} className="text-[#D4FF3F]" />
              <span>SAN FRANCISCO (PST)</span>
            </div>
            <div className="text-lg sm:text-xl font-bold text-[#F4F3EE]">{times.sf}</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#545458]">
              <IconGeodesicGlobe size={12} className="text-[#D4FF3F]" />
              <span>BERLIN (CET)</span>
            </div>
            <div className="text-lg sm:text-xl font-bold text-[#F4F3EE]">{times.berlin}</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#545458]">
              <IconGeodesicGlobe size={12} className="text-[#D4FF3F]" />
              <span>TOKYO (JST)</span>
            </div>
            <div className="text-lg sm:text-xl font-bold text-[#F4F3EE]">{times.tokyo}</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#545458]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF3F]" />
              <span>UTC SYNC</span>
            </div>
            <div className="text-lg sm:text-xl font-bold text-[#D4FF3F]">{times.utc}</div>
          </div>
        </div>

        {/* Main Footer Links & Information */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-8">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <LogoSelv size={36} className="text-[#F4F3EE]" />
              <span className="font-display font-black text-2xl tracking-tight text-[#F4F3EE]">
                SELV<span className="text-[#D4FF3F]">.</span>
              </span>
            </div>
            <p className="text-sm text-[#8E8E93] font-light max-w-sm leading-relaxed">
              Quiet luxury AI Creative Studio. Uniting high-dimensional generative intelligence with uncompromising aesthetic rigor.
            </p>
            <div className="flex items-center space-x-3 text-xs font-mono text-[#D4FF3F]">
              <span className="w-2 h-2 rounded-full bg-[#D4FF3F] animate-ping" />
              <span>STUDIO CAPACITY: 2 ENGAGEMENTS FOR Q3 2026</span>
            </div>
          </div>

          {/* Quick Sitemap */}
          <div className="md:col-span-3 space-y-4 font-mono text-xs">
            <div className="text-[#545458] uppercase tracking-widest">// DIRECTORY</div>
            <ul className="space-y-2.5 text-[#8E8E93]">
              <li>
                <a href="#services" className="hover:text-[#D4FF3F] transition-colors">
                  01 // CAPABILITIES
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#D4FF3F] transition-colors">
                  02 // SELECTED ARTEFACTS
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#D4FF3F] transition-colors">
                  03 // SYNTHESIS PROTOCOL
                </a>
              </li>
              <li>
                <a href="#manifesto" className="hover:text-[#D4FF3F] transition-colors">
                  04 // PHILOSOPHY
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4FF3F] transition-colors">
                  05 // INITIATE TRANSMISSION
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-4 space-y-6 flex flex-col justify-between">
            <div className="space-y-4 font-mono text-xs">
              <div className="text-[#545458] uppercase tracking-widest">// NETWORK & SOCIALS</div>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#121216] border border-[#F4F3EE]/10 flex items-center justify-center text-[#8E8E93] hover:text-[#0A0A0B] hover:bg-[#D4FF3F] hover:border-[#D4FF3F] transition-all duration-300"
                      aria-label={social.name}
                      data-cursor="pointer"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="self-start inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#141418] border border-[#F4F3EE]/10 text-xs font-mono text-[#8E8E93] hover:text-[#D4FF3F] hover:border-[#D4FF3F] transition-all group"
              data-cursor="pointer"
            >
              <span className="rotate-180 inline-block">
                <IconArrowDown size={14} className="group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <span>RETURN TO TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom Legal & Colophon */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-[#F4F3EE]/05 text-[11px] font-mono text-[#545458] gap-4 relative z-10">
          <div>
            © {new Date().getFullYear()} SELV. CREATIVE ATELIER CORP. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-4">
            <span>NO COOKIES • ZERO TRACKING</span>
            <span>•</span>
            <span className="text-[#8E8E93]">DESIGNED WITH IMPECCABLE CRAFT</span>
          </div>
        </div>
      </div>

      {/* Giant Monolithic Watermark Brand Name in Background (Vertically & Horizontally Centered) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0">
        <span className="font-display font-black text-[22vw] leading-none text-[#F4F3EE]/[0.03] tracking-tighter block select-none">
          SELV.
        </span>
      </div>
    </footer>
  );
}

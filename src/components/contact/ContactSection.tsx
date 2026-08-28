"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowUpRight, IconCrosshair, IconCheck } from "../ui/Icons";

export function ContactSection() {
  const [selectedScope, setSelectedScope] = useState<string[]>(["Brand Identity"]);
  const [selectedBudget, setSelectedBudget] = useState<string>("$50k – $100k");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const scopes = [
    "AI Brand Identity",
    "Generative Design System",
    "WebGL / Motion Shaders",
    "AI Product UX",
    "Full Atelier Partnership",
  ];

  const budgetTiers = ["$25k – $50k", "$50k – $100k", "$100k – $250k", "$250k+"];

  const toggleScope = (scope: string) => {
    if (selectedScope.includes(scope)) {
      if (selectedScope.length > 1) {
        setSelectedScope(selectedScope.filter((s) => s !== scope));
      }
    } else {
      setSelectedScope([...selectedScope, scope]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-40 px-6 sm:px-12 bg-[#0A0A0B] border-t border-[#F4F3EE]/08"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Directives & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#D4FF3F]">
              <IconCrosshair size={14} />
              <span>// 06. COMMENCE COLLABORATION</span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl text-[#F4F3EE] tracking-tight leading-[1.05]">
              LET’S BUILD <br />
              <span className="text-[#D4FF3F]">THE UNSEEN.</span>
            </h2>

            <p className="text-base text-[#8E8E93] font-light leading-relaxed">
              We partner with ambitious founders, cultural institutions, and category leaders. Tell us about your vision, and our partners will respond within 24 hours.
            </p>

            <div className="space-y-6 pt-6 border-t border-[#F4F3EE]/08 font-mono text-xs">
              <div>
                <div className="text-[#545458] uppercase mb-1">DIRECT ATELIER ENQUIRIES</div>
                <a
                  href="mailto:partner@selv.studio"
                  className="text-[#F4F3EE] hover:text-[#D4FF3F] transition-colors text-sm font-semibold"
                >
                  partner@selv.studio
                </a>
              </div>

              <div>
                <div className="text-[#545458] uppercase mb-1">STUDIO SANCTUARY</div>
                <div className="text-[#8E8E93]">
                  SAN FRANCISCO • TOKYO • BERLIN
                </div>
              </div>

              <div>
                <div className="text-[#545458] uppercase mb-1">RESPONSE PROTOCOL</div>
                <div className="text-[#D4FF3F]">
                  GUARANTEED PARTNER REVIEW IN &lt; 24H
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Bespoke Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#111114] border border-[#F4F3EE]/08 shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#D4FF3F]/10 border border-[#D4FF3F] text-[#D4FF3F] flex items-center justify-center mx-auto">
                      <IconCheck size={32} />
                    </div>
                    <h3 className="font-display font-black text-3xl text-[#F4F3EE]">
                      TRANSMISSION RECEIVED
                    </h3>
                    <p className="text-sm font-mono text-[#8E8E93] max-w-md mx-auto">
                      Your project brief has been ingested into our review queue. A studio director will initiate contact shortly.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 rounded-full bg-[#18181D] text-xs font-mono text-[#D4FF3F] border border-[#F4F3EE]/10 hover:border-[#D4FF3F]"
                    >
                      SEND ANOTHER TRANSMISSION
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    {/* Project Scope Chips */}
                    <div className="space-y-3">
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#8E8E93]">
                        01 // SELECT PROJECT SCOPE
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {scopes.map((scope) => {
                          const active = selectedScope.includes(scope);
                          return (
                            <button
                              key={scope}
                              type="button"
                              onClick={() => toggleScope(scope)}
                              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 border ${
                                active
                                  ? "bg-[#D4FF3F] text-[#0A0A0B] border-[#D4FF3F] font-bold"
                                  : "bg-[#18181D] text-[#8E8E93] border-[#F4F3EE]/05 hover:text-[#F4F3EE] hover:border-[#F4F3EE]/20"
                              }`}
                            >
                              {scope}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Budget Tier Chips */}
                    <div className="space-y-3">
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#8E8E93]">
                        02 // ANTICIPATED INVESTMENT
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {budgetTiers.map((tier) => {
                          const active = selectedBudget === tier;
                          return (
                            <button
                              key={tier}
                              type="button"
                              onClick={() => setSelectedBudget(tier)}
                              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 border ${
                                active
                                  ? "bg-[#F4F3EE] text-[#0A0A0B] border-[#F4F3EE] font-bold"
                                  : "bg-[#18181D] text-[#8E8E93] border-[#F4F3EE]/05 hover:text-[#F4F3EE] hover:border-[#F4F3EE]/20"
                              }`}
                            >
                              {tier}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Text Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-widest text-[#8E8E93]">
                          YOUR NAME *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Satoshi Nakamoto"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#18181D] border border-[#F4F3EE]/10 rounded-xl px-4 py-3.5 text-sm text-[#F4F3EE] placeholder-[#545458] focus:outline-none focus:border-[#D4FF3F] focus:ring-1 focus:ring-[#D4FF3F] transition-all font-mono"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-mono uppercase tracking-widest text-[#8E8E93]">
                          CORPORATE EMAIL *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#18181D] border border-[#F4F3EE]/10 rounded-xl px-4 py-3.5 text-sm text-[#F4F3EE] placeholder-[#545458] focus:outline-none focus:border-[#D4FF3F] focus:ring-1 focus:ring-[#D4FF3F] transition-all font-mono"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#8E8E93]">
                        ORGANIZATION / PROJECT URL
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. https://domain.xyz"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[#18181D] border border-[#F4F3EE]/10 rounded-xl px-4 py-3.5 text-sm text-[#F4F3EE] placeholder-[#545458] focus:outline-none focus:border-[#D4FF3F] focus:ring-1 focus:ring-[#D4FF3F] transition-all font-mono"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#8E8E93]">
                        PROJECT OBJECTIVE & TIMELINE
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Briefly describe your objectives, target audience, and primary deliverables..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#18181D] border border-[#F4F3EE]/10 rounded-xl px-4 py-3.5 text-sm text-[#F4F3EE] placeholder-[#545458] focus:outline-none focus:border-[#D4FF3F] focus:ring-1 focus:ring-[#D4FF3F] transition-all font-mono resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-4 rounded-full bg-[#D4FF3F] text-[#0A0A0B] font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#E2FF66] transition-all duration-300 flex items-center justify-center space-x-3 shadow-[0_0_25px_rgba(212,255,63,0.3)] hover:shadow-[0_0_40px_rgba(212,255,63,0.5)] group disabled:opacity-50"
                    >
                      <span>{status === "submitting" ? "SYNCHRONIZING..." : "TRANSMIT INQUIRY"}</span>
                      <IconArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

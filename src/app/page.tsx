"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Preloader } from "@/components/ui/Preloader";
import { HeroSection } from "@/components/hero/HeroSection";
import { TickerSection } from "@/components/ticker/TickerSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { SelectedWorkSection } from "@/components/work/SelectedWorkSection";
import { ProcessSection } from "@/components/process/ProcessSection";
import { ManifestoSection } from "@/components/manifesto/ManifestoSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { FooterSection } from "@/components/footer/FooterSection";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Studio Cinematic Preloader */}
      <Preloader onComplete={() => setLoaded(true)} />

      {/* Main Page Content */}
      <main className="relative bg-[#0A0A0B] text-[#F4F3EE] w-full min-h-screen">
        <Navbar />
        <HeroSection />
        <TickerSection />
        <ServicesSection />
        <SelectedWorkSection />
        <ProcessSection />
        <ManifestoSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}

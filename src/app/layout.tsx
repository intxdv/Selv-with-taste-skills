import type { Metadata } from "next";
import { Syne, Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Selv. — AI Creative Studio & Generative Design Atelier",
  description:
    "Selv. synthesizes generative artificial intelligence with uncompromising aesthetic rigor. Engineering living brand identities, generative design systems, and spatial interfaces for visionary brands.",
  keywords: [
    "AI Creative Studio",
    "Generative Design",
    "Brand Identity",
    "Creative Technology",
    "WebGL",
    "Design Systems",
    "Quiet Luxury",
    "Selv",
  ],
  authors: [{ name: "Selv. Atelier" }],
  openGraph: {
    title: "Selv. — AI Creative Studio",
    description: "Quiet luxury generative design atelier uniting machine intellect with radical craft.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selv. — AI Creative Studio",
    description: "Synthesizing generative intelligence with radical craft.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="bg-[#0A0A0B] text-[#F4F3EE] font-sans antialiased selection:bg-[#D4FF3F] selection:text-[#0A0A0B] min-h-screen relative overflow-x-hidden">
        <SmoothScrollProvider>
          <CustomCursor />
          <NoiseOverlay />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

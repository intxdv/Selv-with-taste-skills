# Selv. — AI Creative Studio Workspace

## Overview
Landing page for **Selv.**, a tier-1 fictional AI Creative Studio uniting artificial intelligence with bespoke design systems for elite brands (quiet luxury tech aesthetic).

## Tech Stack
- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables Design Tokens
- **Animations**: Framer Motion (`motion/react`) + GSAP ScrollTrigger
- **3D Hero**: React Three Fiber + `@react-three/drei` (Interactive generative particle orb)
- **Smooth Scroll**: Lenis
- **Typography**: Syne & Space Grotesk (Display) + Geist Sans & JetBrains Mono (Body/UI)
- **Iconography**: 100% custom handcrafted inline SVGs (geometric, hairline stroke)

## Structure
- `src/app/`: Layout, Providers, and Main Page
- `src/components/`:
  - `hero/`: HeroSection & Interactive 3D Canvas Orb
  - `cursor/`: Custom Magnetic Fluid Cursor
  - `preloader/`: Brutalist Minimal Studio Intro Preloader
  - `ticker/`: Kinetic Client & Capability Marquee
  - `services/`: Staggered Offset Interactive Services Showcase
  - `work/`: Selected Works with dynamic gradient shaders & hover distortion
  - `process/`: Scroll-linked Parallax Timeline (4 Phases)
  - `manifesto/`: Kinetic Editorial Typography & Core Philosophy
  - `contact/`: Minimal Bespoke Inquiry Form & Project Scope Selector
  - `footer/`: Timezone status, Studio coordinates & Custom SVG Socials
  - `ui/`: Custom Icons, Badges, Buttons, Noise Overlay
- `src/styles/`: `globals.css` with fine noise generator, token variables, custom cursor styles, scrollbar styling

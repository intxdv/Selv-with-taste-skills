import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

// Brand Logo: Minimalist Geometric Monomark
export function LogoSelv({ size = 28, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect width="40" height="40" rx="8" fill="#0E0E12" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <path
        d="M12 15C12 13.3431 13.3431 12 15 12H25C26.6569 12 28 13.3431 28 15V17C28 18.6569 26.6569 20 25 20H15C13.3431 20 12 21.3431 12 23V25C12 26.6569 13.3431 28 15 28H25C26.6569 28 28 26.6569 28 25"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="28" cy="12" r="2.5" fill="#D4FF3F" />
      <circle cx="12" cy="28" r="1.5" fill="#D4FF3F" opacity="0.6" />
    </svg>
  );
}

export const LogoNova = LogoSelv;

// Precision 45-degree Arrow
export function IconArrowUpRight({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

// Precision Right Arrow
export function IconArrowRight({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="14 6 20 12 14 18" />
    </svg>
  );
}

// 4-Point Razor Star
export function IconSparkle({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M12 2L13.8 9.2C14.3 11.2 15.8 12.7 17.8 13.2L22 14L17.8 14.8C15.8 15.3 14.3 16.8 13.8 18.8L12 22L10.2 14.8C9.7 12.8 8.2 11.3 6.2 10.8L2 10L6.2 9.2C8.2 8.7 9.7 7.2 10.2 5.2L12 2Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="12" cy="12" r="1.5" fill="#D4FF3F" />
    </svg>
  );
}

// Service Icon 1: AI Brand Identity (Neural Core Matrix)
export function IconNeuralIdentity({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      className={className}
      {...props}
    >
      <rect x="5" y="5" width="22" height="22" strokeDasharray="3 2" />
      <circle cx="16" cy="16" r="4" stroke="#D4FF3F" strokeWidth="1.5" />
      <line x1="5" y1="16" x2="12" y2="16" />
      <line x1="20" y1="16" x2="27" y2="16" />
      <line x1="16" y1="5" x2="16" y2="12" />
      <line x1="16" y1="20" x2="16" y2="27" />
      <circle cx="5" cy="5" r="1.5" fill="currentColor" />
      <circle cx="27" cy="5" r="1.5" fill="currentColor" />
      <circle cx="5" cy="27" r="1.5" fill="currentColor" />
      <circle cx="27" cy="27" r="1.5" fill="currentColor" />
    </svg>
  );
}

// Service Icon 2: Generative Design Systems (Isometric Morphic Grid)
export function IconGenerativeSystem({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      className={className}
      {...props}
    >
      <path d="M16 3L28 10V22L16 29L4 22V10L16 3Z" />
      <path d="M16 3V16M28 10L16 16M4 10L16 16M16 16V29" />
      <circle cx="16" cy="16" r="2.5" fill="#D4FF3F" stroke="none" />
      <line x1="10" y1="6.5" x2="22" y2="13.5" strokeOpacity="0.4" />
      <line x1="22" y1="18.5" x2="10" y2="25.5" strokeOpacity="0.4" />
    </svg>
  );
}

// Service Icon 3: Motion & Interactive (Dynamic Oscillation Waves)
export function IconMotionInteractive({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      className={className}
      {...props}
    >
      <path d="M3 16C6 8 10 8 13 16C16 24 20 24 23 16C26 8 29 8 31 16" strokeLinecap="round" />
      <path d="M3 21C6 15 10 15 13 21C16 27 20 27 23 21C26 15 29 15 31 21" strokeOpacity="0.4" strokeDasharray="2 2" />
      <circle cx="13" cy="16" r="2" fill="#D4FF3F" stroke="none" />
      <circle cx="23" cy="16" r="2" fill="#D4FF3F" stroke="none" />
      <line x1="16" y1="4" x2="16" y2="28" strokeOpacity="0.25" strokeDasharray="1 3" />
    </svg>
  );
}

// Service Icon 4: AI-Assisted Product Design (Precision Viewport Coordinate)
export function IconProductSynthesis({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      className={className}
      {...props}
    >
      <rect x="4" y="6" width="24" height="20" rx="1" />
      <line x1="4" y1="12" x2="28" y2="12" />
      <line x1="12" y1="12" x2="12" y2="26" />
      <circle cx="8" cy="9" r="1" fill="#D4FF3F" stroke="none" />
      <line x1="17" y1="19" x2="23" y2="19" stroke="#D4FF3F" />
      <circle cx="20" cy="19" r="3" strokeOpacity="0.5" />
    </svg>
  );
}

// Precision Crosshair
export function IconCrosshair({ size = 18, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="8" strokeOpacity="0.5" />
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
      <circle cx="12" cy="12" r="1.5" fill="#D4FF3F" stroke="none" />
    </svg>
  );
}

// Geodesic Globe for Timezone / Location
export function IconGeodesicGlobe({ size = 18, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="5.5" y1="7" x2="18.5" y2="7" strokeOpacity="0.4" />
      <line x1="5.5" y1="17" x2="18.5" y2="17" strokeOpacity="0.4" />
    </svg>
  );
}

// Custom Hairline Social Icons
export function IconX({ size = 18, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M4 4L19.5 20M4 20L19.5 4" />
    </svg>
  );
}

export function IconInstagram({ size = 18, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function IconLinkedIn({ size = 18, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="1.5" />
      <line x1="7" y1="10" x2="7" y2="17" />
      <circle cx="7" cy="7" r="1" fill="currentColor" stroke="none" />
      <path d="M12 17V12.5C12 11.2 13 10.5 14.2 10.5C15.8 10.5 16.5 11.5 16.5 13V17M12 13.5V17" />
    </svg>
  );
}

export function IconBehance({ size = 18, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      className={className}
      {...props}
    >
      <path d="M3 7H7.5C9 7 9.5 8 9.5 9C9.5 10 8.5 11 7 11M3 11H8C9.5 11 10.5 12 10.5 13.5C10.5 15 9 16 7 16H3V7Z" />
      <path d="M14 13.5H20C20 11.5 18.8 10 17 10C15 10 14 11.5 14 13.5C14 15.5 15.2 16.5 17.2 16.5C18.8 16.5 19.8 15.5 20 14.5" />
      <line x1="15" y1="7.5" x2="19" y2="7.5" />
    </svg>
  );
}

export function IconTerminal({ size = 18, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      className={className}
      {...props}
    >
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <polyline points="7 9 10 12 7 15" strokeLinecap="round" />
      <line x1="12" y1="15" x2="17" y2="15" stroke="#D4FF3F" />
    </svg>
  );
}

export function IconCheck({ size = 18, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function IconArrowDown({ size = 20, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <line x1="12" y1="4" x2="12" y2="20" />
      <polyline points="6 14 12 20 18 14" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// COLORS
// ─────────────────────────────────────────────
export const colors = {
  // Backgrounds
  bg: {
    base: "#091413", // page bg
    surface: "#F1F1D", // card / section surface
    elevated: "#152B28",
  },

  accent: {
    primary: "#44ACFF", // main blue accent
    hover: "#5FB8FF", // accent on hover
    muted: "#44ACFF1A", // accent at 10% capacity
    // (backgrouds)
    border: "#44ACFF4D",
    // (borders)
  },

  // Text
  text: {
    primary: "#E8EDEC", // headlines, important text
    secondary: "#9CA3AF", // body text (gray-400)
    muted: "#6B7280", // captions, labels (gray-500)
  },

  // Borders
  border: {
    subtle: "rgba(255,255,255,0.05)", // section dividers
    default: "rgba(255,255,255,0.10)", // card borders
    strong: "rgba(255,255,255,0.15)", // button borders
    accent: "rgba(68,172,255,0.40)", // accent borders
  },

  // Status
  status: {
    success: "22c55e",
    successBg: "rgba(34,197,94,0.15)",
    successBorder: "rgba(34,197,94,0.25)",
    warning: "f59e0b",
    warningBg: "rgba(245,158,11,0.15)",
    warningBorder: "rgba(245,158,11,0.25)",
    error: "#ef4444",
    errorBg: "rgba(239,68,68,0.15)",
    errorBorder: "rgba(239,68,68,0.25)",
    purple: "a78bfa",
    purpleBg: "rgba(167,139,250,0.10)",
    purpleBorder: "rgba(167,139,250,0.20)",
  },
};

// ─────────────────────────────────────────────
// TYPOGRAPHY
// ─────────────────────────────────────────────
export const typography = {
  // Headings
  h1: "font-bold text-4xl md:text-6xl lg:text-7xl text-[#E8EDEC] leading-[1.05] my-6 tracking-tight",
  h2: "font-bold text-3xl md:text-5xl text-[#E8EDEC] leading-tight text-center my-4",
  h3: "font-bold text-2xl md:text-4xl text-[#E8EDEC]",
  h4: "font-bold text-xl text-[#E8EDEC]",
  // Body
  body: "text-lg md:text-xl text-gray-400 mt-6 max-w-2xl leading-relaxed text-center",
  bodySmall: "text-sm text-gray-400 leading-relaxed",
  // Labels
  eyeBrow: "text-[#44ACFF] font-semibold tracking-widest uppercase text-sm text-center py-3",
  caption: "text-xs text-gray-500 uppercase tracking-wider",
};

// ─────────────────────────────────────────────
// SPACING
// ─────────────────────────────────────────────
export const spacing = {
  section: "py-24 px-6", // standard section padding
  sectionSm: "py-16 px-6", // smaller section
  container: "max-w-6xl mx-auto", // standard content width
  containerSm: "max-w-4xl mx-auto", // narrow content width
  containerXs: "max-w-3xl mx-auto", // CTA sections
};

// ─────────────────────────────────────────────
// BUTTONS
// Ready-made className strings.
// Usage: <button className={btn.primary}>Click</button>
// ─────────────────────────────────────────────
export const btn = {
  // Filled — main CTA
  primary:
    "px-8 py-3.5 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] transition-colors",
  // Filled small
  primarySm:
    "px-4 py-2 rounded-lg bg-[#44ACFF] text-[#091413] text-sm font-semibold hover:bg-[#5FB8FF] transition-colors",
  // Ghost secondary cta
  ghost:
    "px-7 py-3.5 mt-12 rounded-lg border border-white/15 text-[#E8EDEC] font-semibold hover:border-[#44ACFF]/50 hover:bg-white/5 transition-colors",
  // Ghost small
  ghostSm:
    "px-4 py-2 rounded-lg border border-white/15 text-gray-300 text-sm font-semibold hover:border-white/30 transition-colors",
  // Danger - logout , delete
  danger:
    "px-4 py-2 rounded-lg border border-white/10 text-gray-400 text-sm font-semibold hover:border-red-400/50 hover:text-red-400 transition-colors",
  // Text link with arrow
  link: "inline-flex items-center gap-2 text-[#44ACFF] font-semibold text-sm hover:gap-3 transition-all",
};

// ─────────────────────────────────────────────
// CARDS
// ─────────────────────────────────────────────
export const card = {
  // Standard Card
  base: "bg-[#0F1F1D] border border-white/10 rounded-xl",
  // Card with hover border effect
  hover:
    "bg-[#0F1F1D] border border-white/10 rounded-xl hover:border-[#44ACFF]/40 transition-colors",
  // Card with padding
  padded: "bg-[#0F1F1D] border border-white/10 rounded-xl p-8",
  // Card with padding and hover
  paddedHover:
    "bg-[#0F1F1D] border border-white/10 rounded-xl p-8 hover:border-[#44ACFF]/40 transition-colors",
  // Inner Card (darker, site inside a surface cell)
  inner: "bg-[#091413] border border-white/10 rounded-lg",
  // Inner with padding
  innerPadded: "bg-[#091413] border border-white/10 rounded-lg p-4",
};

// ─────────────────────────────────────────────
// BADGES / PILLS
// ─────────────────────────────────────────────
export const badge = {
  // Hero eyebrow pill
  pill: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#44ACFF]/30 bg-[#44ACFF]/5 text-[#44ACFF] text-xs font-semibold tracking-widest uppercase",
  // Status badges
  live: "text-xs px-2.5 py-1 rounded-full font-semibold bg-green-600/15 text-green-400 border border-green-600/25",
  soon: "text-xs px-2.5 py-1 rounded-full font-semibold bg-white/5 text-gray-500 border border-white/10",
  success:
    "text-xs px-2.5 py-1 rounded-full font-semibold bg-green-600/15 text-green-400 border border-green-600/25",
  warning:
    "text-xs px-2.5 py-1 rounded-full font-semibold bg-amber-600/15 text-amber-400 border border-amber-600/25",
  error:
    "text-xs px-2.5 py-1 rounded-full font-semibold bg-red-600/15 text-red-400 border border-red-600/25",
  purple:
    "text-xs px-2.5 py-1 rounded-full font-semibold bg-purple-600/15 text-purple-400 border border-purple-600/25",
};

// ─────────────────────────────────────────────
// INPUTS
// ─────────────────────────────────────────────

export const input = {
  base: "w-full p-3 rounded-lg bg-[#091413] border border-white/10 text-[#E8EDEC] placeholder-gray-600 focus:outline-none focus:border-[#44ACFF]/50 transition-colors",
  select:
    "w-full p-3 rounded-lg bg-[#091413] border border-white/10 text-[#E8EDEC] focus:outline-none focus:border-[#44ACFF]/50 transition-colors",
};

// ─────────────────────────────────────────────
// DIVIDERS
// ─────────────────────────────────────────────

export const divider = {
  subtle: "border-t border-white/5",
  default: "border-t border-white/10",
};

// ─────────────────────────────────────────────
// BACKGROUNDS (section alternation)
// Use these to alternate section backgrounds
// for visual rhythm down the page:
//   odd sections  → bg.base    (#091413)
//   even sections → bg.surface (#0F1F1D)
// ─────────────────────────────────────────────
export const section = {
  base: "bg-[#091413]",
  surface: "bg-[#0F1F1D]",
};

// ─────────────────────────────────────────────
// CHART THEME
// Pass these to Recharts components for
// consistent dark-theme chart styling
// ─────────────────────────────────────────────
export const chatTheme = {
  grid: "#ffffff08",
  axis: "#4b5563",
  fontSize: 11,
  toolTip: {
    bg: "#091413",
    border: "rgba(255,255,255,0.15)",
  },
  colors: {
    primary: "#44ACFF",
    success: "#22c55e",
    warning: "#f59e0b",
    error: "#ef4444",
    purple: "#079bfa",
    city: "#44ACFF",
    highway: "#a8557",
    mixed: "#06b6d4",
  },
};

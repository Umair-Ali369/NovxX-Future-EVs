// FILE: src/Pages/Ecosystem.jsx

import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

const PRODUCTS = [
  {
    phase: "Phase 1",
    phaseColor: "#22c55e",
    status: "Live",
    statusColor: "#22c55e",
    emoji: "⚡",
    name: "NovxX Platform",
    type: "EV Intelligence Software",
    description:
      "The foundation. A full-stack EV intelligence platform with battery range calculation, AI-powered insights, efficiency tracking, and smart driving analytics. Built for emerging markets where EV tools don't exist yet.",
    features: ["Battery Range Calculator", "AI Insight Engine", "Performance Dashboard", "Smart Driving Analytics"],
    link: "/",
    linkLabel: "Open Platform",
    external: false,
  },
  {
    phase: "Phase 2",
    phaseColor: "#f59e0b",
    status: "In Progress",
    statusColor: "#f59e0b",
    emoji: "🌐",
    name: "NovxLing",
    type: "AI Communication Platform",
    description:
      "The expansion. An AI-powered multilingual communication platform breaking language barriers with real-time translation and intelligent language processing. Same vision, different domain — intelligent software for everyone.",
    features: ["Real-time Translation", "Multilingual AI", "Communication Tools", "Language Intelligence"],
    link: null,
    linkLabel: null,
    external: false,
  },
  {
    phase: "Phase 3",
    phaseColor: "#44ACFF",
    status: "Future",
    statusColor: "#44ACFF",
    emoji: "🚗",
    name: "NovxX Vehicles",
    type: "Electric Hardware",
    description:
      "The vision. Smart, affordable electric vehicles built for markets that need them most. Software-first approach means the intelligence platform comes first — hardware follows when the foundation is proven.",
    features: ["Smart EV Hardware", "Built-in Intelligence", "Emerging Markets Focus", "Affordable by Design"],
    link: "/concept",
    linkLabel: "See Concept",
    external: false,
  },
];

const PILLARS = [
  {
    icon: "🧠",
    title: "Software First",
    body: "Intelligence before hardware. Build the tools, prove the market, then ship the vehicles.",
  },
  {
    icon: "🌍",
    title: "Emerging Markets",
    body: "Built for the billions who need EVs most — not just premium markets with existing infrastructure.",
  },
  {
    icon: "🔓",
    title: "Building in Public",
    body: "Every line of code, every lesson learned, every milestone — shared openly on GitHub.",
  },
  {
    icon: "⚙️",
    title: "Real Engineering",
    body: "Every feature is backed by real EV engineering study. Not just software — a system grounded in physics.",
  },
];

const TIMELINE = [
  { year: "2025", label: "NovxX Platform Plane — EV intelligence software", done: true },
  { year: "2026", label: "Updation of AI Insight Engine + Dashboard V2 shipped", done: true },
  { year: "2026 →", label: "NovxX - Completing Version 1 and deployed. NovxLing — multilingual AI platform", done: false, active: true },
  { year: "2027", label: "NovxX Platform expansion and Vehicle Building Plans — more markets", done: false },
  { year: "2028+", label: "NovxX Vehicles — hardware phase begins", done: false },
];

const Ecosystem = () => {
  const heroRef = useScrollReveal();
  const productsRef = useScrollReveal();
  const pillarsRef = useScrollReveal();
  const timelineRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <div className="bg-[#091413] min-h-screen text-white">

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="reveal relative flex flex-col items-center justify-center text-center px-6 py-24 md:pt-36 border-b border-white/5 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#44ACFF 1px, transparent 1px), linear-gradient(90deg, #44ACFF 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#44ACFF]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl flex flex-col items-center gap-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#44ACFF]/20 bg-[#44ACFF]/5 text-[#44ACFF] text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#44ACFF] animate-pulse" />
            Brand Ecosystem
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-[#E8EDEC] leading-tight">
            One Vision.
            <br />
            <span className="text-[#44ACFF]">Multiple Products.</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
            NovxX is not just an app — it's the first product in a broader ecosystem of intelligent software
            and hardware, built from scratch by one developer, for markets that need it most.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <Link
              to="/"
              className="btn-press px-6 py-3 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] transition-colors text-sm"
            >
              Try NovxX Now
            </Link>
            <Link
              to="/story"
              className="btn-press px-6 py-3 rounded-lg border border-white/15 text-[#E8EDEC] font-semibold hover:bg-white/5 transition-colors text-sm"
            >
              The Founder Story
            </Link>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section
        ref={productsRef}
        className="reveal py-24 px-6 border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="text-center">
            <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-xs mb-3">The Products</p>
            <h2 className="font-bold text-3xl md:text-4xl text-[#E8EDEC]">
              Three phases. One ecosystem.
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {PRODUCTS.map((p, i) => (
              <div
                key={p.name}
                className="bg-[#0F1F1D] border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row gap-8 hover:border-white/15 transition-colors"
              >
                {/* Left — phase + icon */}
                <div className="flex flex-col items-start gap-4 md:w-48 shrink-0">
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{
                      color: p.phaseColor,
                      background: `${p.phaseColor}15`,
                      border: `1px solid ${p.phaseColor}30`,
                    }}
                  >
                    {p.phase}
                  </span>
                  <div className="text-5xl">{p.emoji}</div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      color: p.statusColor,
                      background: `${p.statusColor}12`,
                      border: `1px solid ${p.statusColor}25`,
                    }}
                  >
                    {p.status}
                  </span>
                </div>

                {/* Middle — content */}
                <div className="flex flex-col gap-4 flex-1">
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{p.type}</p>
                    <h3 className="font-bold text-2xl text-[#E8EDEC]">{p.name}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{p.description}</p>
                  {p.link && (
                    p.external ? (
                      <a href={p.link} target="_blank" rel="noopener noreferrer"
                        className="self-start text-sm font-semibold text-[#44ACFF] hover:underline">
                        {p.linkLabel} →
                      </a>
                    ) : (
                      <Link to={p.link}
                        className="self-start text-sm font-semibold text-[#44ACFF] hover:underline">
                        {p.linkLabel} →
                      </Link>
                    )
                  )}
                </div>

                {/* Right — features */}
                <div className="flex flex-col gap-2 md:w-52 shrink-0">
                  <p className="text-gray-600 text-xs uppercase tracking-wider font-semibold mb-1">Includes</p>
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <span style={{ color: p.phaseColor }} className="text-xs">✦</span>
                      <span className="text-gray-400 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pillars ── */}
      <section
        ref={pillarsRef}
        className="reveal bg-[#0F1F1D] py-24 px-6 border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div className="text-center">
            <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-xs mb-3">What We Stand For</p>
            <h2 className="font-bold text-3xl md:text-4xl text-[#E8EDEC]">Brand Pillars</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="bg-[#091413] border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-[#44ACFF]/20 transition-colors"
              >
                <span className="text-3xl">{p.icon}</span>
                <h3 className="font-bold text-[#E8EDEC] text-lg">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section
        ref={timelineRef}
        className="reveal py-24 px-6 border-b border-white/5"
      >
        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          <div className="text-center">
            <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-xs mb-3">Roadmap</p>
            <h2 className="font-bold text-3xl md:text-4xl text-[#E8EDEC]">Where we're headed</h2>
          </div>

          <div className="flex flex-col border-l-2 border-white/10 pl-8 gap-0">
            {TIMELINE.map((item) => (
              <div key={item.year} className="relative flex flex-col gap-1 pb-10 last:pb-0">
                <div
                  className="absolute -left-[41px] top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                  style={{
                    borderColor: item.done ? "#22c55e" : item.active ? "#44ACFF" : "#1E332F",
                    backgroundColor: item.done ? "#22c55e" : item.active ? "#44ACFF" : "#091413",
                  }}
                >
                  {item.done && (
                    <svg className="w-2 h-2 text-[#091413]" fill="currentColor" viewBox="0 0 12 12">
                      <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                    </svg>
                  )}
                </div>
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: item.done ? "#22c55e" : item.active ? "#44ACFF" : "#4b5563" }}
                >
                  {item.year}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        ref={ctaRef}
        className="reveal py-24 px-6 text-center"
      >
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <span className="text-4xl">⚡</span>
          <h2 className="font-bold text-3xl md:text-4xl text-[#E8EDEC]">
            Be part of it from the start
          </h2>
          <p className="text-gray-400 text-lg">
            One developer. One vision. Building the future of intelligent mobility — in public.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/register"
              className="btn-press px-8 py-3.5 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] transition-colors"
            >
              Join NovxX
            </Link>
            <a
              href="https://github.com/Umair-Ali369"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press px-8 py-3.5 rounded-lg border border-white/15 text-[#E8EDEC] font-semibold hover:bg-white/5 transition-colors"
            >
              GitHub →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Ecosystem;
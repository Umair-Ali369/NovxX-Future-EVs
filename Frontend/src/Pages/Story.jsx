import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";

const STACKS = [
  { label: "Frontend", items: "React, Vite, Tailwind CSS" },
  { label: "Backend", items: "Node.js, Express, MongoDB" },
  { label: "AI / ML", items: "Groq SDK, Qwen, Llma" },
  { label: "Auth", items: "JWT, Bcrypt" },
  { label: "Tools", items: "Git, Github, Postman, VS Code, Cursor" },
];

const PROJECTS = [
  {
    emoji: "⚡",
    name: "NovxX",
    tag: "In Progress",
    tagColor: "#22c55e",
    description: `Full-stack EV Intelligent Platform. Battery range calculator. AI-powered 
        insights, performance dashboard, and samrt driving analytics - built for emerging market.
        `,
    link: null,
    linklabel: null,
    external: false,
  },
  {
    emoji: "🌐",
    name: "NovxLing",
    tag: "In Progress",
    tagColor: "#f59e0b",
    description: `AI-powered multilingual communication platform. Breaking language barriers with 
      real-time translation and inteligent language processing.
      `,
    link: null,
    linklabel: null,
    external: false,
  },
  {
    emoji: "🔧",
    name: "More Coming",
    tag: "Planned",
    tagColor: "#6b7280",
    description: `More projects are in progress. Building one thing at a time, shipping consistently.
        `,
    link: "https://github.com/Umair-Ali369",
    linklabel: "Follow on Github",
    external: true,
  },
];
const Story = () => {
  const heroRef = useScrollReveal();
  const storyRef = useScrollReveal();
  const projectsRef = useScrollReveal();
  const stackRef = useScrollReveal();
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
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#44ACFF]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#44ACFF]/20 bg-[#44ACFF]/5 text-[#44ACFF] text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#44ACFF] animate-pulse" />
            The Founder
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-[#E8EDEC] leading-tight">
            Hi, I'm <span className="text-[#44ACFF]">Umair Ali</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
            Self-taught Developer from Paksitan building intelligent software
            for the future electric mobility.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <a
              href="https://github.com/Umair-Ali369"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm font-semibold text-[#E8EDEC] hover:bg-white/10 hover:border-white/20 transition-colors btn-press"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Github
            </a>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#44ACFF]/30 text-sm font-semibold text-[#44ACFF] hover:bg-[#44ACFF]/5 transition-colors btn-press"
            >
              Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* ── My Story ── */}
      <section
        ref={storyRef}
        className="reveal py-24 px-6 border-b border-white/5"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div>
            <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-xs mb-3">
              My Story
            </p>
            <h2 className="font-bold text-3xl md:text-4xl text-[#E8EDEC]">
              Building from zero,
              <br />
              in public
            </h2>
          </div>
          <div className="flex flex-col gap-5 text-gray-400 text-lg leading-relaxed">
            <p>
              I started this journey with a simple goal - building something
              meaningful with limimted resources but a big vision. I become
              fascinated by Electriv Vehicles and decided to do what most people
              wouldn't : Learn EV engineering from scratch while simultaneously
              building the software platform.
            </p>
            <p>
              No CS degree. No Team. No funding. Just a laptop, an internet
              connection, and a strubborn commitment to shipping real things.
              Every feature in NovxX is connected to what I'm actively studying
              about real EV engineering - from how batteries degrate to how
              terrain effect the range.
            </p>
            <p>
              I'm building in public, sharing the journey on github, and proving
              that geography and resources don't determine what you can create.
            </p>
          </div>

          {/* Reading progress */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-5 flex items-start gap-4">
              <span className="text-2xl">📖</span>
              <div>
                <p className="text-[#E8EDEC] font-semibold text-sm">
                  How Car Works
                </p>
                <p className="text-gray-500 text-xs mt-1">Completed ✓</p>
              </div>
            </div>
            <div className="bg-[#0F1F1D] border border-white/10 rounded-xl p-5 flex items-start gap-4">
              <span className="text-2xl">📗</span>
              <div>
                <p className="text-[#E8EDEC] font-semibold text-sm">
                  Electric Vehicle Technology Explained
                </p>
                <p className="text-[#44ACFF] text-xs mt-1">Currently reading</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            {[
              { year: "Late 2024", label: "Satrted Lerning Web Developement" },
              { year: "Early 2025", label: "Learning and building projects" },
              { year: "Mid 2025", label: "Building Full-stack projects" },
              {
                year: "Late 2025",
                label:
                  "Planned the NovxX - EV Intelligence Platform and Vision",
              },
              {
                year: "Early 2026",
                label:
                  "Started Building NovxX , AI Insight Enigne + Dashboard. And also Planned the NovxLing (multilingual Platoform vision) and start building.",
              },
              {
                year: "Mid 2026 →",
                label:
                  "NovxLing in progress , NovxX expanding (soon completed version 1 and ready for live deployment)",
                active: true,
              },
            ].map((item) => (
              <div
                key={item.year}
                className="relative flex flex-col gap-1 pb-7 last:pb-0"
              >
                <div
                  className="absolute -left-[29px] top-1 w-3 h-3 rounded-full border-2"
                  style={{
                    borderColor: item.active ? "#44ACFF" : "#1E332F",
                    backgroundColor: item.active ? "#44ACFF" : "#091413",
                  }}
                />
                <p className="text-[#44ACFF] text-xs font-semibold uppercase tracking-wider">
                  {item.year}
                </p>
                <p className="text-gray-300 text-sm"> {item.label} </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section
        ref={projectsRef}
        className="reveal bg-[#0F1F1D] py-24 px-6 border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div>
            <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-xs mb-3">
              What I'm Building
            </p>
            <h2 className="font-bold text-3xl md:text-4xl text-[#E8EDEC]">
              Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <div
                key={p.name}
                className="bg-[#091413] border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-[#44ACFF]/20 transition-colors card-lift"
              >
                <div className="flex flex-col gap-5 items-center justify-between">
                  <span className="text-3xl"> {p.emoji} </span>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-semibold"
                    style={{
                      color: p.tagColor,
                      backgroundColor: `${p.tagColor}18`,
                      border: `1px solid ${p.tagColor}30`,
                    }}
                  >
                    {p.tag}
                  </span>
                  <h3 className="font-bold text-lg text-[#E8EDEC]">{p.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {p.description}
                  </p>
                  {p.link &&
                    (p.external ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="self-start text-xs font-semibold text-[#44ACFF] hover:underline"
                      >
                        {p.linklabel} →
                      </a>
                    ) : (
                      <Link
                        to={p.link}
                        className="self-start text-xs font-semibold text-[#44ACFF] hover:underline"
                      >
                        {p.linklabel} →
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stack ── */}
      <section
        ref={stackRef}
        className="reveal py-24 px-6 border-b border-white/5"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div>
            <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-xs mb-3">
              Tech Stack
            </p>
            <h2 className="font-bold text-3xl md:text-4xl text-[#E8EDEC]">
              What I build With
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {STACKS.map((s) => (
              <div
                key={s.label}
                className="bg-[#0F1F1D] border border-white/10 rounded-xl p-5 flex flex-col gap-2 hover:border-[#44ACFF]/20 transition-colors"
              >
                <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold">
                  {s.label}
                </p>
                <p className="text-[#E8EDEC] text-sm font-medium">
                  {" "}
                  {s.items}{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaRef} className="reveal py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h2 className="font-bold text-3xl md:text-4xl text-[#E8EDEC]">
            Follow the journey
          </h2>
          <p className="text-gray-400 text-lg">
            Everything is on GitHub. Building in public, one commit at a time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Umair-Ali369"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press px-8 py-3.5 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] transition-colors"
            >
              GitHub →
            </a>
            <Link
              to="/calculator"
              className="btn-press px-8 py-3.5 rounded-lg border border-white/15 text-[#E8EDEC] font-semibold hover:bg-white/5 transition-colors"
            >
              Try NovxX
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;

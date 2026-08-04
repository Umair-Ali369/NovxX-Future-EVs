import React from "react";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal"

const ConceptVehicle = () => {

  const ref = useScrollReveal()
  const ref1 = useScrollReveal()
  const ref2 = useScrollReveal()
  const ref3 = useScrollReveal()
  const ref4 = useScrollReveal()
  const ref5 = useScrollReveal()
  const ref6 = useScrollReveal()


  return (
    <div className="bg-[#091413] min-h-screen text-white">
      {/* Hero Section */}
      <section ref={ref} className="flex flex-col items-center justify-center text-center px-6 py-40 pt-48 border-b border-white/5 overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#44ACFF 1px, transparent 1px), linear-gradient(90deg, #44ACFF 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#44ACFF]/8 rounded-full blur-3xl pointer-events-none" />
 
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#44ACFF]/30 bg-[#44ACFF]/5 text-[#44ACFF] text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#44ACFF] animate-pulse" />
            NovxX Concept Vehicle
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            The EV we are building toward
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Not just a car. A moving intelligence system. Designed from the
            ground up to be software-first, efficiency-focused, and built for
            emerging markets.
          </p>
          <Link
            to="/features"
            className="px-8 py-3.5 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] transition-colors"
          >
            Explore the Platform
          </Link>
        </div>
      </section>

      {/* Philosphy section */}
      <section
        ref={ref1}
        className="reveal max-w-6xl mx-auto px-6 py-24"
      >
        <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm mb-3 text-center">
          Our Philosophy
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Built on Three Core Beliefs
        </h2>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "💻",
              title: "Software-First EV",
              desc: "The intelligence of the vehicle lives in its software. Every system — battery management, range prediction, driving feedback — is driven by data and logic, not guesswork. The hardware serves the software.",
            },
            {
              icon: "⚡",
              title: "Efficiency-Focused",
              desc: "In emerging markets, every kilometer matters. NovxX is engineered to extract maximum range from every charge through smart driving analysis, terrain awareness, and real-time load optimization.",
            },
            {
              icon: "🧠",
              title: "Smart Battery Intelligence",
              desc: "The battery is the heart of an EV. NovxX treats it as a living system — monitoring stress levels, usage patterns, and temperature impact to protect it and maximize its lifespan.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="reveal-child bg-[#0F1F1D] border border-white/10 rounded-xl p-8 flex flex-col gap-4 hover:border-[#44ACFF]/40 transition-colors card-lift"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#E8EDEC]">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cokpit Version */}
      <section
        ref={ref2}
        className="reveal border-t border-white/5 py-24 px-6"
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 bg-[#0F1F1D] border border-white/10 rounded-2xl h-72 flex flex-col items-center justify-center gap-4">
            <span className="text-7xl">🖥️</span>
            <p className="text-gray-500 text-sm tracking-widest uppercase">
              Cockpit Render — Coming Soon
            </p>
          </div>
 
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm">
              Cockpit Vision
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#E8EDEC]">
              A dashboard that thinks with you
            </h2>
            <p className="text-gray-400 leading-relaxed">
              The NovxX cockpit is not a collection of screens — it is a single
              intelligent interface. It surfaces only what matters: your current
              range, battery stress level, efficiency score, and the next smart
              action to take.
            </p>
            <ul className="flex flex-col gap-3 text-gray-300">
              {[
                "Minimal, distraction-free layout",
                "Real-time battery and efficiency readout",
                "Smart alerts based on driving behavior",
                "Adaptive to terrain, temperature, and load",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#44ACFF] mt-1">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Battery Intelligence */}
      <section
        ref={ref3}
        className="reveal border-t border-white/5 py-24 px-6 bg-[#0F1F1D]/40"
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full lg:w-1/2 bg-[#0F1F1D] border border-white/10 rounded-2xl h-72 flex flex-col items-center justify-center gap-4">
            <span className="text-7xl">🔋</span>
            <p className="text-gray-500 text-sm tracking-widest uppercase">
              Battery System — Coming Soon
            </p>
          </div>
 
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm">
              Battery Intelligence
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#E8EDEC]">
              The brain behind the battery
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Most EVs tell you your battery percentage. NovxX tells you what
              that percentage means — how far you can actually go given your
              driving style, the temperature today, the terrain ahead, and how
              you have been driving all week.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                { label: "Stress Monitoring", icon: "📊" },
                { label: "Temperature Awareness", icon: "🌡️" },
                { label: "Usage Pattern Tracking", icon: "📈" },
                { label: "Lifespan Optimization", icon: "🛡️" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#091413] border border-white/10 rounded-lg p-4 flex items-center gap-3"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-sm font-semibold text-gray-300">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Mobility */}
      <section
        ref={ref4}
        className="reveal border-t border-white/5 py-24 px-6 bg-[#0F1F1D]/40"
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full lg:w-1/2 bg-[#0F1F1D] border border-white/10 rounded-2xl h-72 flex flex-col items-center justify-center gap-4">
            <span className="text-7xl">🔋</span>
            <p className="text-gray-500 text-sm tracking-widest uppercase">
              Battery System — Coming Soon
            </p>
          </div>
 
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm">
              Battery Intelligence
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#E8EDEC]">
              The brain behind the battery
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Most EVs tell you your battery percentage. NovxX tells you what
              that percentage means — how far you can actually go given your
              driving style, the temperature today, the terrain ahead, and how
              you have been driving all week.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {[
                { label: "Stress Monitoring", icon: "📊" },
                { label: "Temperature Awareness", icon: "🌡️" },
                { label: "Usage Pattern Tracking", icon: "📈" },
                { label: "Lifespan Optimization", icon: "🛡️" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#091413] border border-white/10 rounded-lg p-4 flex items-center gap-3"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-sm font-semibold text-gray-300">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Roadmap */}
      <section
        ref={ref5}
        className="reveal border-t border-white/5 py-24 px-6 bg-[#0F1F1D]/40"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#44ACFF] font-semibold tracking-widest uppercase text-sm mb-3">
            The Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Where we are. Where we are going.
          </h2>
          <div className="flex flex-col gap-6 text-left">
            {[
              {
                phase: "Phase 1 — Now",
                title: "Building the Intelligence Platform",
                desc: "The NovxX web platform — battery analyzer, smart insights, dashboard, and EV calculator — is live and growing.",
                status: "active",
              },
              {
                phase: "Phase 2 — Near Future",
                title: "AI-Powered Driving Assistant",
                desc: "Moving from logic-based insights to AI-driven recommendations that learn from your driving behavior over time.",
                status: "upcoming",
              },
              {
                phase: "Phase 3 — Future",
                title: "Hardware Prototype",
                desc: "First physical NovxX concept vehicle prototype — software-first, designed for emerging market roads and infrastructure.",
                status: "upcoming",
              },
              {
                phase: "Phase 4 — Vision",
                title: "Full Mobility Ecosystem",
                desc: "NovxX vehicles, charging network, and platform operating as one connected ecosystem across emerging markets.",
                status: "upcoming",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex gap-6 p-6 rounded-xl border ${
                  item.status === "active"
                    ? "border-[#44ACFF] bg-[#44ACFF]/5"
                    : "border-white/10 bg-[#091413]"
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded-full mt-1 flex-shrink-0 ${
                      item.status === "active"
                        ? "bg-[#44ACFF]"
                        : "bg-white/20"
                    }`}
                  />
                  {i < 3 && (
                    <div className="w-px flex-1 bg-white/5 min-h-8" />
                  )}
                </div>
                <div>
                  <p
                    className={`text-sm font-semibold mb-1 ${
                      item.status === "active"
                        ? "text-[#44ACFF]"
                        : "text-gray-500"
                    }`}
                  >
                    {item.phase}
                  </p>
                  <h3 className="text-lg font-bold text-[#E8EDEC] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ref6}
        className="reveal border-t border-white/5 py-24 px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#E8EDEC] mb-4">
          Be part of what we are building
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          The platform is live. The vision is clear. Start using NovxX today
          and grow with us as we build toward the future of electric mobility.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="px-8 py-3.5 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] transition-colors"
          >
            Join NovxX
          </Link>
          <Link
            to="/about"
            className="px-8 py-3.5 rounded-lg border border-white/15 text-[#E8EDEC] font-semibold hover:border-[#44ACFF]/50 hover:bg-white/5 transition-colors"
          >
            Read Our Story
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ConceptVehicle;
